import { useEffect, useState } from "react";
import '../styles/Carousel.css'
import api from '../api';

const Carousel = () => {
    const [books, setBooks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        console.log("useEffect triggered");
        const fetchBooks = async () => {
            try {
                console.log("getting books");
                const response = await api.get('/api/trending-books/');
                console.log("Fetched Books:", response.data);
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        }

        fetchBooks();
    }, []);

    const carouselInfiniteScroll = () => {
        if (currentIndex === books.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(()=> {
        const interval = setInterval(()=> {carouselInfiniteScroll()}, 3000)
        return () => clearInterval(interval)
    }, [books]);
    
    return (
        <div className='carousel-container'>
            { books.map((book, index) => (
                <div
                    className='carousel-item'
                    style={{transform: `translate(-${currentIndex * 100}%)`}}
                    key={index}
                >
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    {/* <img src={book.image_url} alt={book.title} /> */}
                </div>
            ))}
        </div>
    );
};

export default Carousel;

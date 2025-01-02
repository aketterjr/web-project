import { useEffect, useState } from "react";
import '../styles/Carousel.css'
import api from '../api';

const Carousel = () => {
    const [books, setBooks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await api.get('/api/trending-books/');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        }

        fetchBooks();
    }, []);

    const carouselInfiniteScroll = () => {
        // books.append(books.pop())
        if (currentIndex === books.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    // Everytime the books array is updates, run this code to start the infinite scroll
    useEffect(() => {
        /* ---------------------------------------------------
            Store the intervalId and set the interval for the 
            infinite scroll to 3000 milliseconds (3 seconds) 
        */
        const interval = setInterval(()=> {carouselInfiniteScroll()}, 5000)
        return () => clearInterval(interval)
    });
    
    return (
        <div className='carousel-container'>
            { books.slice(0, -1).map((book, index) => (
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
            {
                <div
                    className='carousel-item-end'
                    style={{transform: `translate(-${currentIndex * 100}%)`}}
                    key={books.length-1}
                >
                    <h2>{books[books.length-1]?.title}</h2>
                    <p>{books[books.length-1]?.author}</p>
                    {/* <img src={book.image_url} alt={book.title} /> */}
                </div>
            }
        </div>
    );
};

export default Carousel;

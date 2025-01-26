import { useEffect, useState } from "react";
import '../styles/Carousel.css'
import api from '../api';

const BACKEND_URL = "http://localhost:8000";

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
        // This is used to put the last book back to the front 
        if (currentIndex === books.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

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
            {books.map((book, index) => (
                <div
                    className='carousel-item'
                    style={{transform: `translate(-${currentIndex * 100}%)`}}
                    key={index}
                >
                    <img src={`${BACKEND_URL}${book.cover}`}/>
                    <div>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;

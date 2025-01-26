import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const Carousel = React.lazy(() => import("../components/Carousel"));
    const navigate = useNavigate();
    
    const handleClick = (link) => {
        console.log(link);
        navigate(link)
    };

    return (
        <div>
            <Helmet>
                <link rel="preload" href="../components/Carousel.jsx" as="script"/>
                <title>KetterProductions</title>
                <meta name="description" content="Welcome to Ketter Productions, a social comic book reading website!" />
                <meta propert="og:title" content="Ketter Productions" />
                <meta property="og:description" content="Explore all of our stories!" />
            </Helmet>
            <div class="header">
                <h1>KetterProductions</h1>
                <button class="button publish" type="button" onClick="">PUBLISH</button>
                <button class="button login" type="button" onClick={handleClick("/login")}>LOGIN</button> 
            </div>
            <React.Suspense fallback={<div>Loading carousel...</div>}>
                <Carousel />
            </React.Suspense>
        </div>
    );
}

export default Home;
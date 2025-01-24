import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
    const Carousel = React.lazy(() => import("../components/Carousel"));
    
    // // Preload the carousel when the component mounts
    // useEffect(() => {
    //     import("../components/Carousel");
    // }, []);

    return (
        <div>
            <Helmet>
                <link rel="preload" href="../components/Carousel.jsx" as="script"/>
                <title>Welcome to Ketter Producitons!</title>
                <meta name="description" content="Welcome to Ketter Productions, a social comic book reading website!" />
                <meta propert="og:title" content="Ketter Productions" />
                <meta property="og:description" content="Explore all of our stories!" />
            </Helmet>
            <h1>Welcome to Ketter Productions!</h1>
            <React.Suspense fallback={<div>Loading carousel...</div>}>
                <Carousel />
            </React.Suspense>
        </div>
    );
}

export default Home;
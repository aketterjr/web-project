import { useState, useEffect } from "react";
import api from "../api";
import Carousel from "../components/Carousel";

function Home() {
    return (
        <div>
            <Carousel />
        </div>
    )
}

export default Home;
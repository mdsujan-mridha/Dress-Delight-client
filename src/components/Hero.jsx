import React from 'react';
import heroImg from "../assets/Hero.png"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,           // Enables autoplay
        autoplaySpeed: 3000,      // 3 seconds between slides
        pauseOnHover: true,       // Pause autoplay on hover
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };


    return (
        <div className='carousel-container'>
            <Slider {...settings}>
                <div>
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url("${heroImg}")`, height: '70vh'
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold uppercase">Stylist Picks Beat the Heat</h1>
                                <Link to="/products" className="btn btn-primary">Shop Now 1</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url("${heroImg}")`, height: '70vh'
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold uppercase">Stylist Picks Beat the Heat</h1>
                                <Link to="/products" className="btn btn-primary">Shop Now 2</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

        </div>

    );
};

export default Hero;
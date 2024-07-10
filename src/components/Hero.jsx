import React from 'react';
import heroImg from "../assets/Hero.png"
const Hero = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: `url("${heroImg}")`, height: '70vh'
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">stylist picks beat 
                    the heat</h1>
                    
                    <button className="btn btn-primary">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
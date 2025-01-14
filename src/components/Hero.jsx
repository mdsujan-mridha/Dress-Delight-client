import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import lazyLoadedHeroOne from "../assets/Hero.png";
import lazyLoadedHeroTwo from "../assets/Hero.png";
import lazyLoadedHeroThree from "../assets/Hero.png";
import { Swiper, SwiperSlide } from 'swiper/react';
const Hero = () => {

    const heroItem = [
        {
            id: 1,
            title: "stylist picks beat the heat",
            image: lazyLoadedHeroOne,
        },
        {
            id: 2,
            title: "stylist picks beat the heat",
            image: lazyLoadedHeroTwo,
        },
        {
            id: 3,
            title: "stylist picks beat the heat",
            image: lazyLoadedHeroThree,
        },
    ]

    return (
        <Swiper
            spaceBetween={50}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
        >
            {
                heroItem.map((item) => (
                   <SwiperSlide key={item.id}>
                    <Suspense fallback={<div>Loading...</div>}></Suspense>
                    <div
                        key={item.id}
                        className="hero"
                        style={{
                            backgroundImage: `url("${item?.image}")`, height: '70vh'
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold uppercase">{item.title} </h1>
                                <Link to="/products" className="btn btn-primary">Shop Now</Link>
                            </div>
                        </div>
                    </div>

                   </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Hero;
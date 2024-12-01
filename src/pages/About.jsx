import React from 'react';
import fakeData from '../utils/fakeData';
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
    const Fiunders = fakeData.Founder;
    const reviews = fakeData.reviews
    return (
        <div>
            <img src='https://i.ibb.co/ydQQ2Mm/Hero.png' alt='banner' className='w-full' />
            <div className='px-12 pt-14'>
                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <img src="https://i.ibb.co/0Z3bTCM/White-and-Blue-Modern-Shoes-Product-Sale-Facebook-Post-1.png" alt="" className=' rounded-md' />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/0Xk1V71/White-and-Blue-Modern-Shoes-Product-Sale-Facebook-Post.png" alt="" className=' rounded-md' />
                    </div>
                </div>
                <div className='pt-12'>
                    <h1 className='text-center font-semibold text-3xl py-10 lato-bold'> The Founders </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                        {
                            Fiunders &&
                            Fiunders.map((founder) => (
                                <div className="max-w-sm rounded overflow-hidden hover:shadow-sm" key={founder.id}>
                                    <img className="w-full h-96" src={founder?.image} alt={founder.name} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{founder.name}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-3xl font-semibold py-10'>Testimonials</h1>
                    <div className='w-3/4 mx-auto'>
                        {
                            reviews &&
                            reviews.map((review) => (
                                <div className='flex items-center gap-5 py-5' key={review.id}>
                                    <img src={review.image} alt={review.name} className='w-80 h-80 rounded-full' />
                                    <div className='flex flex-col'>
                                        <p className='text-sm'>
                                            <FaQuoteLeft />
                                            <span className='text-xl font-bold py-5'>{review.review}</span>
                                        </p>
                                        <h1 className='font-semibold py-5'>{review.name}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
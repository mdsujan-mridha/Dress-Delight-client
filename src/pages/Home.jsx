import React from 'react';
import Hero from '../components/Hero';

import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { FaFingerprint } from "react-icons/fa";
import NewArival from '../components/NewArival';
import TopSeller from '../components/TopSeller';

const Home = () => {

    return (
        <div className='px-0'>
            <Hero />
            <div className='px-12'>
                <NewArival 
                from={0}
                to={4}
                title={"Discover NEW Arrivals"}
                subTitle={"Recently added shirts!"}
                />
                <div className='py-12 flex justify-between items-center'>
                    <div className='flex justify-between gap-5 p-5 hover:shadow-md'>
                        <div><FaShippingFast size={35} color='#024E82' /></div>
                        <div>
                            <h4 className="text-md uppercase  lato-bold">Free Shipping</h4>
                            <p>Enjoy free shipping on all  <br />orders above $100</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 p-5 hover:shadow-md'>
                        <div><BiSupport  size={35} color='#024E82' /></div>
                        <div>
                            <h4 className="text-md uppercase  lato-bold">SUPPORT 24/7</h4>
                            <p>Our support team is there <br /> to help you for queries</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 p-5 hover:shadow-md'>
                        <div><GiReturnArrow size={35} color='#024E82' /></div>
                        <div>
                            <h4 className="text-md uppercase  lato-bold">30 DAYS RETURN</h4>
                            <p>Enjoy free shipping on all  <br />orders above $100</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 p-5 hover:shadow-md'>
                        <div><FaFingerprint size={35} color='#024E82' /></div>
                        <div>
                            <h4 className="text-md uppercase  lato-bold">100% PAYMENT SECURE</h4>
                            <p>Enjoy free shipping on all <br /> orders above $100</p>
                        </div>
                    </div>
                </div>
                <NewArival 
                 from={0}
                 to={4}
                 title={"Trending product"}
                 subTitle={"Explore our trending product!"}
                />
                <div className='flex justify-between items-center pb-12 gap-5'>
                    <div className='bg-secondary h-96 w-1/2 flex justify-center items-center flex-col gap-5'>
                        <h1 className='text-primary text-xl uppercase lato-regular space-x-1'>peace of mind</h1>
                        <p className='text-primary text-sm lato-regular text-center'>A one-stop platform for all your fashion needs,<br /> hassle-free. Buy with a peace of mind.</p>
                        <button className='text-secondary w-40 h-14 bg-primary  hover:bg-transparent hover:border-2 hover:text-primary'>buy now</button>
                    </div>
                    <div className='bg-secondary h-96 w-1/2 flex justify-center items-center flex-col gap-5'>
                        <h1 className='text-primary text-xl uppercase lato-regular space-x-1'>peace of mind</h1>
                        <p className='text-primary text-sm lato-regular text-center'>A one-stop platform for all your fashion needs,<br /> hassle-free. Buy with a peace of mind.</p>
                        <button className='text-secondary w-40 h-14 bg-primary hover:bg-transparent hover:border-2 hover:text-primary'>buy now</button>
                    </div>
                </div>
                <TopSeller />
            </div>
        </div>
    );
};

export default Home;
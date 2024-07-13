import React from 'react';
import Hero from '../components/Hero';
import NewArival from '../components/NewArival';
import { FaShippingFast } from "react-icons/fa";
const Home = () => {
    return (
        <div className='px-0'>
            <Hero />
            <div className='px-12'>
                <NewArival />
                <div className='py-12 flex justify-between items-center'>
                    <div className='flex justify-between gap-5 p-5 hover:shadow-md'>
                        <div><FaShippingFast size={35} color='#024E82' /></div>
                        <div>
                            <h4 className="text-md uppercase  lato-bold">Free Shipping</h4>
                            <p>Enjoy free shipping on all  <br />orders above $100</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 p-5 hover:shadow-md'>
                        <div><FaShippingFast size={35} color='#024E82' /></div>
                        <div>
                            <h4 className="text-md uppercase  lato-bold">Free Shipping</h4>
                            <p>Enjoy free shipping on all <br /> orders above $100</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 p-5 hover:shadow-md'>
                        <div><FaShippingFast size={35} color='#024E82' /></div>
                        <div>
                            <h4 className="text-md uppercase  lato-bold">Free Shipping</h4>
                            <p>Enjoy free shipping on all  <br />orders above $100</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 p-5 hover:shadow-md'>
                        <div><FaShippingFast size={35} color='#024E82' /></div>
                        <div>
                            <h4 className="text-md uppercase  lato-bold">Free Shipping</h4>
                            <p>Enjoy free shipping on all <br /> orders above $100</p>
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
    );
};

export default Home;
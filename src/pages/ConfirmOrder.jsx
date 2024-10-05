

import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ConfirmOrder = () => {
    const navigate = useNavigate()
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    const { cartItems,shippingInfo } = useSelector((state) => state.cart);
    
    const date = new Date().toISOString();

    // calculate subtotal 
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // shipping price 
    const shippingPrice = subtotal > 1000 ? 0 : 200;
    // tax price
    const taxPrice = subtotal * 0.18;
    // total price
    const totalPrice = subtotal + shippingPrice + taxPrice;

    // console.log(date);
    // console.log(cartItems);
    // console.log(shippingInfo);
    const address = `${shippingInfo.address},${shippingInfo.state},${shippingInfo.country}`;


    const proceedToPayment = () => {
        const data = {
            subtotal,
            shippingPrice,
            taxPrice,
            totalPrice
        };

        sessionStorage.setItem("orderInfo", JSON.stringify(data));
        navigate("/process/payment")
    }

    return (
        // < !--component -- >
        <div className="py-14 mx-12">
            {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

            <div className="flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
                <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600"> {date} </p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                        {
                            cartItems &&
                            cartItems.map((item) => (
                                <div key={item.product} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <img className="w-full hidden md:block" src={item.image} alt="dress" />
                                        <img className="w-full md:hidden"
                                            src={item.image} alt="dress" />
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{item.name}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm leading-none text-gray-800"><span className="">Style: </span> Italic Minimal Design</p>

                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg leading-6"> {item.price} <span className="text-red-300 line-through"> $45.00</span></p>
                                            <p className="text-base xl:text-lg leading-6 text-gray-800"> {item.quantity} </p>
                                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800"> {item.price} </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600"> {subtotal} </p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Tax Price <span className="bg-gray-200 p-1 text-xs font-medium  dark:text-gray-800 leading-3 text-gray-800">(%)</span></p>
                                    <p className="text-base leading-4 text-gray-600"> {taxPrice} </p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600"> {shippingPrice} </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600"> {totalPrice} </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6  font-semibold text-gray-800">DPD Delivery<br /><span className="font-normal">Delivery with 24 Hours</span></p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6  text-gray-800"> {shippingPrice} </p>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button onClick={proceedToPayment} className="bg-accent w-full h-14 rounded-lg text-white"> Processed to pay </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-blue-200">
                                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                <div className="flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{user.name}</p>
                                    <p className="text-sm leading-5 text-gray-600">
                                        {moment(`${user?.createdAt}`).fromNow()}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-blue-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 ">{user.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                    <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"> {shippingInfo.address} </p>
                                </div>
                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                    <p className="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"> {address} </p>
                                </div>
                            </div>
                            <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                <button className="mt-6 md:mt-0 dark:border-blue  dark:bg-transparent  py-5   border border-gray-800 font-medium w-96 2xl:w-full text-base  leading-4 text-gray-800">Edit Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmOrder;
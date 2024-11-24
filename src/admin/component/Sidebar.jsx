

import React from 'react';
import { Link } from 'react-router-dom';

import "../style/style.css";


import { useSelector } from 'react-redux';
import { FaEdit,FaUsers } from 'react-icons/fa';

import { RiLogoutCircleRLine } from 'react-icons/ri'; 
import { AiOutlineProduct } from "react-icons/ai";
import { MdAddToPhotos,MdOutlinePreview  } from "react-icons/md";



const Sidebar = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    return (
        <div className='flex flex-col gap-5 rounded-md min-h-screen bg-blue-400 shadow-xl items-start px-2'>

            <div className='flex flex-col justify-center items-center gap-5 w-72 h-72 pb-2 mx-auto mt-10'>
                <img src={user?.avatar?.url} alt={`${user?.name}’s profile pic`} className='w-full h-full rounded-full border-2 border-blue-800 pb-2' />
            </div>

            <div className='flex flex-col  gap-5 items-start'>
                <Link to="/admin/products" className='text-center flex gap-5  items-center justify-start'>
                    <AiOutlineProduct className='text-2xl text-white' />
                    <h1 className='text-2xl text-white text-center'> All Products </h1>
                </Link>
                <Link to="/admin/new-product" className='text-center flex gap-5  items-center justify-start'>
                    <MdAddToPhotos  className='text-2xl text-white' />
                    <h1 className='text-2xl text-white text-center'> New Products </h1>
                </Link>
                <Link to="/update" className='text-center flex gap-5  items-center justify-start'>
                    <FaEdit className='text-2xl text-white' />
                    <h1 className='text-2xl text-white text-center'> Orders </h1>
                </Link>
                <Link to="/setting" className='text-center flex gap-5  items-center justify-start'>
                    <MdOutlinePreview  className='text-2xl text-white' />
                    <h1 className='text-2xl text-white text-center'> Review </h1>
                </Link>
                <Link to="/setting" className='text-center flex gap-5  items-center justify-start'>
                    <FaUsers  className='text-2xl text-white' />
                    <h1 className='text-2xl text-white text-center'> Users </h1>
                </Link>
                <Link className='text-center flex gap-5  items-center justify-start'>
                    <RiLogoutCircleRLine className='text-2xl text-white' />
                    <h1 className='text-2xl text-white text-center'> Logout </h1>
                </Link>

            </div>
        </div>
    );
};

export default Sidebar;



import React from 'react';

import { Link } from 'react-router-dom';
import { FaUser, FaList, FaEdit } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaMessage } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const ProfileSidebar = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    return (
        <>
            <div className='flex flex-col gap-5 rounded-md min-h-screen bg-blue-900 shadow-xl items-start px-2'>

                <div className='flex flex-col justify-center items-center gap-5 w-72 h-72 pb-2 mx-auto mt-10'>
                    <img src={user?.avatar?.url} alt={`${user?.name}’s profile pic`} className='w-full h-full rounded-full border-2 border-blue-800 pb-2' />
                </div>

                <div className='flex flex-col  gap-5 items-start'>
                    <Link to="/profile" className='text-center flex gap-5  items-center justify-start'>
                        <FaUser className='text-2xl text-white' />
                        <h1 className='text-2xl text-white text-center'> Profile </h1>
                    </Link>
                    <Link to="/orders" className='text-center flex gap-5  items-center justify-start'>
                        <FaList className='text-2xl text-white' />
                        <h1 className='text-2xl text-white text-center'> orders </h1>
                    </Link>
                    <Link to="/update" className='text-center flex gap-5  items-center justify-start'>
                        <FaEdit className='text-2xl text-white' />
                        <h1 className='text-2xl text-white text-center'> Update </h1>
                    </Link>
                    <Link to="/setting" className='text-center flex gap-5  items-center justify-start'>
                        <IoMdSettings className='text-2xl text-white' />
                        <h1 className='text-2xl text-white text-center'> Setting </h1>
                    </Link>
                    <Link to="/setting" className='text-center flex gap-5  items-center justify-start'>
                        <FaMessage className='text-2xl text-white' />
                        <h1 className='text-2xl text-white text-center'> Message </h1>
                    </Link>
                    <Link className='text-center flex gap-5  items-center justify-start'>
                        <RiLogoutCircleRLine className='text-2xl text-white' />
                        <h1 className='text-2xl text-white text-center'> Logout </h1>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default ProfileSidebar;
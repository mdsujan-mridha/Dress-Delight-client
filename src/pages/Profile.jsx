import { Avatar, Stack, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import ProfileSidebar from '../user/ProfileSidebar';

const Profile = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    // console.log(user);
    return (
        <div className='flex flex-col md:flex-row lg:flex-row gap-5 min-h-screen px-12 py-12 bg-blue-950'>
            <div className='w-full md:w-1/4 lg:w-1/4'>
                <ProfileSidebar user={user} />
            </div>
            <div className='w-full md:w-3/4 lg:w-3/4'>
                <h1 className='text-center font-bold text-3xl text-white'> Welcome to <span className='text-orange-400'>{user.name} ’s</span> profile </h1>

                <div className='flex flex-col gap-5 mt-10 lg:flex-row lg:justify-between md:flex-row'>
                    <div className='w-96 bg-orange-500 h-52 rounded-md p-2'> <h1 className=' text-center text-white text-2xl py-5'> Total Order </h1> </div>
                    <div className='w-96 bg-violet-500 h-52 rounded-md p-2'> <h1 className=' text-center text-white text-2xl py-5'> Total Order </h1> </div>
                    <div className='w-96 bg-red-500 h-52 rounded-md p-2'> <h1 className=' text-center text-white text-2xl py-5'> Total Order </h1> </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
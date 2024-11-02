

import React from 'react';
import ProfileSidebar from './ProfileSidebar';
import { Typography } from '@mui/material';

const Orders = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row gap-5 min-h-screen px-12 py-12'>
            <div className='w-full md:w-1/4 lg:w-1/4'>
                <ProfileSidebar />
            </div>
            <div className='w-full md:w-3/4 lg:w-3/4'>
                <Typography component="h5"> Orders </Typography>
            </div>
        </div>
    );
};

export default Orders;
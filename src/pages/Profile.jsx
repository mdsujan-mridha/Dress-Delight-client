import { Avatar, Stack } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    // console.log(user);
    return (
        <Stack className="bg-gray-100 flex items-center justify-center min-h-screen">

            {/* <!-- User Profile Card --> */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
                {/* <!-- Avatar --> */}
                <div className="flex justify-center">
                    <Avatar
                        src={user?.avatar?.url}
                        sx={{
                            width: 100,
                            height: 100,
                            margin: "auto",
                        }}
                    />
                </div>

                {/* <!-- User Info --> */}
                <div className="text-center mt-4">
                    <h2 className="text-xl font-semibold text-black">{user?.name}</h2>
                    <p className="text-gray-600">{user?.email}</p>
                </div>

                {/* <!-- Profile Details --> */}
                <div className="mt-6">
                    <p className="text-black"><strong>Member Since:</strong> {moment(`${user?.createdAt}`).fromNow()} </p>
                    <p className="text-black mt-2"><strong>Orders:</strong> 15 Orders Placed</p>
                    <p className="text-black mt-2"><strong>Location:</strong> New York, USA</p>
                </div>

                {/* <!-- Action Buttons --> */}
                <div className="flex justify-around mt-6">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Edit Profile</button>
                    <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600">Log Out</button>
                </div>
            </div>

        </Stack>
    );
};

export default Profile;


import { SpeedDial, SpeedDialAction } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaList } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { useSelector } from 'react-redux';

const UserOptions = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    // console.log(user);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const options = [
        { icon: <FaList />, name: "Orders", func: orders },
        { icon: <IoPerson />, name: "profile", func: profile },
        { icon: <FaShoppingCart />, name: "cart", func: shoppingCart },
        { icon: <MdDashboard />, name: "dashboard", func: dashboard },
        { icon: <RiLogoutCircleRLine />, name: "logout", func: logout },
    ]

    function orders() {
        navigate("/orders")
    }
    function profile() {
        navigate("/profile")
    }
    function shoppingCart() {
        navigate("/cart")
    }
    function logout() {
        navigate("/")
    }
    function dashboard() {
        navigate("/dashboard")
    }

    return (
        <Fragment>
            <SpeedDial
                style={{ position: "absolute", top: 20}}
                ariaLabel="SpeedDial tooltip example"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                direction="down"
                className=""
                icon={
                    <img className="speedDialIcon" src={user ? user.avatar.url : "/profile.png"} alt="Profile" />
                }
            >
                {
                    options.map((item) => (
                        <SpeedDialAction
                            key={item.name}
                            icon={item.icon}
                            tooltipTitle={item.name}
                            onClick={item.func}
                            tooltipOpen={window.innerWidth <= 600 ? true : false}
                        />
                    ))
                }
            </SpeedDial>
        </Fragment>
    );
};

export default UserOptions;
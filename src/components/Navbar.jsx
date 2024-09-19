import React from 'react';
import { Link } from 'react-router-dom';
import UserOptions from './UserOptions';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    const menuItem = [
        {
            id: 1,
            menu: <Link to="/">Home</Link>
        },
        {
            id: 2,
            menu: <Link to="/products">Products</Link>
        },
        {
            id: 3,
            menu: <Link to="/contact">Contact</Link>
        },
        {
            id: 4,
            menu: <Link to="/blogs">Blog</Link>
        },
        {
            id: 5,
            menu: <Link to="/about">About us</Link>
        },
    ]
    return (
        <div className='px-12'>
            <div className="navbar bg-primary h-24 lg:h-22 lg:border-b-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItem.map((item) => (
                                    <li key={item.id} className='text-secondary text-xl font-semibold'>{item?.menu}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost  text-4xl font-bold text-secondary uppercase"> BLACK BIRD </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItem.map((item) => (
                                <li key={item.id} className='text-secondary text-xl font-semibold'>{item?.menu}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && isAuthenticated === true ? <UserOptions /> : <Link to="/login" className="btn">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
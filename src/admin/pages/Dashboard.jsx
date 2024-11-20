
import React, { useEffect } from 'react';
import { Link, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { getAdminProduct } from '../../redux/action/productAction';
import Sidebar from '../component/Sidebar';
import { Doughnut, Line } from "react-chartjs-2";
import Chart from "chart.js/auto"
import "../style/style.css";
import { getAllUser } from '../../redux/action/userAction';
import { getAllOrders } from '../../redux/action/orderAction';
const Dashboard = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    const { orders } = useSelector((state) => state.allOrders);
    const { users } = useSelector((state) => state.allUsers);

    // console.log(products);
    let outOfStock = 0;
    products &&
        products.forEach((item) => {
            if (item.Stock === 0) {
                outOfStock += 1;
            }
        })

    let totalAmount = 0;
    orders &&
        orders.forEach((item) => {
            totalAmount += item.totalPrice;
        })

    useEffect(() => {
        dispatch(getAdminProduct())
        dispatch(getAllUser())
        dispatch(getAllOrders())
    }, [dispatch]);


    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0, totalAmount],
            },
        ],
    };
    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [outOfStock, products?.length - outOfStock],
            },
        ],
    };

    return (
        <div className='flex flex-col md:flex-row lg:flex-row gap-5 min-h-screen px-12 py-12 bg-white'>
            <div className='w-full md:w-1/4 lg:w-1/4'>
                <Sidebar />
            </div>
            <div className='w-full md:w-3/4 lg:w-3/4'>
                <h1 className='text-center font-bold text-3xl text-blue-900'> Welcome to <span className='text-orange-400'>{user.name} ’s</span> Dashboard </h1>

                <div className='flex flex-col gap-5 mt-10 lg:flex-row lg:justify-between md:flex-row'>
                    <div className='w-96 bg-orange-500 h-52 rounded-md p-2'>
                        <h1 className=' text-center text-white text-2xl py-5'> Total Order </h1>
                        <p className='text-white text-5xl text-center'> {orders && orders?.length} </p>
                    </div>
                    <div className='w-96 bg-violet-500 h-52 rounded-md p-2'>
                        <h1 className=' text-center text-white text-2xl py-5'> Total Products </h1>
                        <p className='text-white text-5xl text-center'> {products && products?.length} </p>
                    </div>
                    <div className='w-96 bg-red-500 h-52 rounded-md p-2'>
                        <h1 className=' text-center text-white text-2xl py-5'> Total users </h1>
                        <p className='text-white text-5xl text-center'> {users && users?.length} </p>
                    </div>
                </div>
                <div className='lineChart'>
                    <Line data={lineState} />
                </div>
                <div className='doughnutChart'>
                    <Doughnut data={doughnutState} />

                </div>
            </div>
            {/* charts */}

        </div>
    );
};

export default Dashboard;
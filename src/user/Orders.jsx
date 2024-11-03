

import React, { useEffect } from 'react';
import ProfileSidebar from './ProfileSidebar';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { clearErrors, myOrders } from '../redux/action/orderAction';
import Loading from '../components/Loading';
import { DataGrid } from '@mui/x-data-grid';
import { MdLaunch } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Orders = () => {
    const dispatch = useDispatch();
    const { loading, error, orders } = useSelector((state) => state.myOrders);
    const { user } = useSelector((state) => state.user);

    const columns = [
        { field: "id", headerName: "OrderID", minWidth: "300", flex: 1 },
        {
            field: "status",
            headerName: "Status",
            minWidth: 150,
            flex: 0.5,
            cellClassName: (params) => {
                return params.row.status === "Delivered" // Corrected: Access status from params.row
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 150,
            flex: 0.3
        },
        {
            field: "amount",
            headerName: "Amount",
            type: "number",
            minWidth: 270,
            flex: 0.5,
        },
        {
            field: "actions",
            flex: 0.3,
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                const orderId = params.row.id; // Corrected: Access row.id instead of getValue(params.id, "id")
                return (
                    <Link to={`/order/${orderId}`}>
                        <MdLaunch />
                    </Link>
                );
            },
        },
    ]
    const rows = [];
    orders &&
        orders.forEach((item, index) => {
            // console.log(item);
            rows.push({
                itemsQty: item.orderItems.length,
                id: item._id,
                status: item.orderStatus,
                amount: item.totalPrice,
            });
        });


    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        dispatch(myOrders())

    }, [dispatch, error]);
    // console.log(orders)

    return (
        <div className='flex flex-col md:flex-row lg:flex-row gap-5 min-h-screen px-12 py-12 bg-blue-950'>
            <div className='w-full md:w-1/4 lg:w-1/4'>
                <ProfileSidebar />
            </div>
            <div className='w-full md:w-3/4 lg:w-3/4'>
                <h1 className='text-center font-bold text-3xl text-white border-b-2'> Welcome to Order page </h1>

                {
                    loading ? (<Loading />)
                        :
                        (<div>

                            <DataGrid
                            className='myOrdersTable'
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5]}
                                disableRowSelectionOnClick
                                autoHeight
                            >

                            </DataGrid>



                        </div>)
                }

            </div>
        </div>
    );
};

export default Orders;
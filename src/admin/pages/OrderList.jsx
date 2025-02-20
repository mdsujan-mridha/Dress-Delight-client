import React, { Fragment, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearErrors, deleteOrder, getAllOrders } from '../../redux/action/orderAction';
import { DELETE_ORDER_RESET } from '../../redux/constant/orderConstant';
import { Delete, Edit } from '@mui/icons-material';
import { Button } from '@mui/material';
import MetaData from '../../components/MetaData';
import Sidebar from '../component/Sidebar';
import { DataGrid } from '@mui/x-data-grid';

const OrderList = () => {

    const dispatch = useDispatch();
    const { error, orders } = useSelector((state) => state.allOrders);
    //  console.log(orders);
    const navigate = useNavigate();
    const { error: deleteError, isDeleted } = useSelector((state) => state.order);

    const deleteOrderHandler = (id) => {
        dispatch(deleteOrder(id));
    };
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        if (deleteError) {
            toast.error(deleteError);
            dispatch(clearErrors())
        }
        if (isDeleted) {
            toast.success("Order delete successfully");
            navigate("/admin/dashboard");
            dispatch({ type: DELETE_ORDER_RESET });
        }
        dispatch(getAllOrders())
    }, [dispatch, error, deleteError, isDeleted, navigate]);
    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

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
            flex: 0.4,
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
                return (
                    <Fragment>
                        <Link to={`/admin/order/${params.row.id}`}> {/* Corrected: Access id from params.row */}
                            <Edit />
                        </Link>

                        <Button
                            onClick={() => deleteOrderHandler(params.row.id)}
                        >
                            <Delete />
                        </Button>
                    </Fragment>
                );
            },
        },
    ];

    const rows = [];

    orders &&
    
        orders.forEach((item) => {
            // console.log(item);
            rows.push({
                id: item._id,
                itemsQty: item.orderItems.length,
                amount: item?.totalPrice,
                status: item.orderStatus,

            });
        });
    return (
        <Fragment>
            <MetaData title={`All order - Admin`} />
            <div className="dashboard">
                <Sidebar />
                <div className="productListContainer">
                    <h1 id="productListHeading"> All ORDERS </h1>
                    <DataGrid
                        rows={rows}
                        columns={columns}

                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[10]}
                        disableRowSelectionOnClick
                        className='myOrdersTable'
                        autoHeight
                    ></DataGrid>
                </div>

            </div>
        </Fragment>
    );
};

export default OrderList;
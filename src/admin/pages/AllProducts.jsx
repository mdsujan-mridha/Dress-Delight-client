
import React, { Fragment, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearErrors, getAdminProduct } from '../../redux/action/productAction';
import { Delete, Edit } from '@mui/icons-material';
import { Button } from '@mui/material';
import Loading from '../../components/Loading';
import MetaData from '../../components/MetaData';
import Sidebar from '../component/Sidebar';
import { DataGrid } from '@mui/x-data-grid';
import "../style/style.css";

const AllProducts = () => {
    const dispatch = useDispatch();
    const { error, loading, products } = useSelector((state) => state.products);

    const navigate = useNavigate();

    const deleteProduct = (id) => {

    }

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        dispatch(getAdminProduct())

    }, [error, dispatch]);


    const columns = [
        { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },
        {
            field: "name",
            headerName: "Name",
            minWidth: 350,
            flex: 1,
        },
        {
            field: "stock",
            headerName: "Stock",
            type: "number",
            minWidth: 150,
            flex: 0.3,
        },

        {
            field: "price",
            headerName: "Price",
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
                        <Link to={`/admin/product/${params.row.id}`}>
                            <Edit />
                        </Link>

                        <Button
                            onClick={() => deleteProduct(params.row.id)}
                        >
                            <Delete />
                        </Button>
                    </Fragment>
                );
            },
        },
    ]

    const rows = [];
    products &&
        products.forEach((item) => {
            rows.push({
                id: item?._id,
                stock: item?.Stock,
                price: item?.price,
                name: item?.name,
            })
        })

    return (
        <Fragment>
            <div>
                {
                    loading ?
                        (<><Loading /></>)
                        :
                        (<>
                            <Fragment>
                                <MetaData title={`ALL Products - Admin`} />
                                <div className="dashboard">
                                    <Sidebar />
                                    <div className="productListContainer">
                                        <h1 id="productListHeading">ALL PRODUCTS</h1>
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
                                            autoHeight
                                            className='productListTable'
                                        >
                                        </DataGrid>
                                    </div>
                                </div>
                            </Fragment>
                        </>)
                }
            </div>
        </Fragment>
    );
};

export default AllProducts;
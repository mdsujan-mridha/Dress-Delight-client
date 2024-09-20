import React, { Fragment, useEffect, useState } from 'react';

import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProduct } from '../redux/action/productAction';
import toast from 'react-hot-toast';
import Loading from './Loading';


const NewArival = ({ from, to, title, subTitle }) => {
    // console.log(fakeData.products);
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    // console.log(products);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        dispatch(getProduct())

    }, [dispatch, error]);

    const homeProducts = products.slice(from, to)

    return (
        <Fragment>
            {
                loading ?
                    (<Loading />)
                    :
                    (<>
                        <div>
                            <h1 className='pt-12 text-center font-semibold text-4xl'> {title} </h1>
                            <p className='text-center font-medium text-lg pt-2'> {subTitle} </p>
                            <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                                {
                                    homeProducts &&
                                    homeProducts.map((product) => (
                                        <ProductCard
                                            key={product._id}
                                            product={product}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </>)
            }
        </Fragment>
    );
};

export default NewArival;
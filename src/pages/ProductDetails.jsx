import { Rating } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    const[product,setProduct] = useState({});

    useEffect(()=>{
        const fetchProduct = async()=>{
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
        }
        fetchProduct();
    } ,[id]);

    // console.log(product?.rating.rate);
    const options = {
        size: "large",
        value: product?.rating?.rate,
        readOnly: true,
        precision: 0.5,
    };
    
    return (
        <Fragment>
          <div className='min-h-screen px-12 w-full'>
            <div className="flex h-96 justify-between items-center gap-5">
            <div className='w-1/2'></div>
                <div className='w-1/2 flex justify-start flex-col gap-5'>
                    <h1 className='lato-bold text-4xl'> {product?.title} </h1>
                    <div className='flex justify-start gap-5 items-center'>
                    <Rating {...options}/> <span className=' font-bold'> {product?.rating.count} Reviews </span>
                    </div>
                    <p className='text-justify'>{product?.description}</p>
                </div>
            </div>
                
          </div>
        </Fragment>
    );
};

export default ProductDetails;
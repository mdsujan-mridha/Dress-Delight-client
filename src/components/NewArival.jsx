import React, { useEffect, useState } from 'react';

import ProductCard from './ProductCard';


const NewArival = ({from ,to,title,subTitle}) => {
    // console.log(fakeData.products);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
   
    const homeProducts = products.slice(from,to)

    return (
        <div>
            <h1 className='pt-12 text-center font-semibold text-4xl'> {title} </h1>
            <p className='text-center font-medium text-lg pt-2'> {subTitle} </p>
            <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    homeProducts &&
                    homeProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default NewArival;
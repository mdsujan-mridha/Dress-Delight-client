import React from 'react';
import fakeData from '../utils/fakeData';
import ProductCard from './ProductCard';

const TopSeller = () => {
    const products = fakeData.topSellers
    return (
        <div>
            <h1 className='pt-12 text-center font-semibold text-4xl'> Top Sellers </h1>
            <p className='text-center font-medium text-lg pt-2'> Browse our top-selling products </p>
            <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    products &&
                    products.map((product) => (
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

export default TopSeller;
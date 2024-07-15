import React from 'react';

const ProductCard = ({ product }) => {
    // console.log(product);
    return (
        <div className="max-w-sm rounded overflow-hidden hover:shadow-sm">
            <img className="w-full h-96" src={product?.image} alt={product.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">${product.price}</p>
            </div>

        </div>
    );
};

export default ProductCard;
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={product.image} alt={product.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">${product.price}</p>
            </div>

        </div>
    );
};

export default ProductCard;
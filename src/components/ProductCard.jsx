import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    
    return (
        <Link to={`/product/${product?._id}`} className="max-w-sm rounded overflow-hidden hover:shadow-md">
            <img className="w-full h-96" src={product.images ? product.images[0].url :""} alt={product?.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">{product?.name}</div>
                <p className=" text-orange-500 text-base">${product.price}</p>
            </div>

        </Link>
    );
};

export default ProductCard;
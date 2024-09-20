import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, view }) => {
    return (
        <Link to={`/product/${product?._id}`} className={`product-card ${view === 'grid' ? 'grid-view' : 'list-view'} 
            ${view === 'grid' ? 'flex flex-col w-80' : 'flex flex-row items-center'}
            bg-white border border-gray-300 rounded-lg`}>
            <img
                src={product.images ? product.images[0].url : ""}
                alt={product.name}
                className={`${view === 'grid' ? 'w-full h-96' : 'w-24 h-auto mr-4'}`}
            />
            <div className={`${view === 'grid' ? 'text-center' : 'text-left flex-grow'}`}>
                <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
                {/* Add more product details as needed */}
            </div>
        </Link>
    );
};

export default ProductCard;

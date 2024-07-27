import React from 'react';

const ProductCard = ({ product, view }) => {
    return (
        <div className={`product-card ${view === 'grid' ? 'grid-view' : 'list-view'} 
            ${view === 'grid' ? 'flex flex-col w-80' : 'flex flex-row items-center'}
            bg-white border border-gray-300 rounded-lg`}>
            <img
                src={product.image}
                alt={product.title}
                className={`${view === 'grid' ? 'w-full h-96' : 'w-24 h-auto mr-4'}`}
            />
            <div className={`${view === 'grid' ? 'text-center' : 'text-left flex-grow'}`}>
                <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
                {/* Add more product details as needed */}
            </div>
        </div>
    );
};

export default ProductCard;

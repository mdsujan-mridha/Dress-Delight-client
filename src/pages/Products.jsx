import React, { useEffect, useState } from 'react';
import Card from "../components/Card"
import { FaTh, FaBars } from 'react-icons/fa'; // Assuming you have react-icons installed

const Products = () => {
    const [products, setProducts] = useState([]);
    const [view, setView] = useState('grid'); // State to manage view

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleViewChange = (newView) => {
        setView(newView);
    };

    return (
        <>
            <div className='flex gap-10 min-h-screen px-12 pt-12'>
                <div className='w-1/4 bg-slate-100 rounded-t-lg'></div>
                <div className='bg-slate-100 rounded-t-lg w-3/4'>
                    <div className='flex justify-end p-4'>
                        {view === 'list' ? (
                            <button
                                className='p-2 text-gray-500'
                                onClick={() => handleViewChange('grid')}
                            >
                                <FaTh size={20} />
                            </button>
                        ) : (
                            <button
                                className='p-2 text-gray-500'
                                onClick={() => handleViewChange('list')}
                            >
                                <FaBars size={20} />
                            </button>
                        )}
                    </div>
                    <div className={`${view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10' : 'flex flex-col'} p-10`}>
                        {products &&
                            products.map((product) => (
                                <Card
                                    key={product.id}
                                    product={product}
                                    view={view}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;

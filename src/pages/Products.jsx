import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import { FaTh, FaBars } from 'react-icons/fa';
import { Slider, } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProduct } from '../redux/action/productAction';
import Loading from '../components/Loading';
import toast from 'react-hot-toast';


const categories = [
    "Laptops",
    "Desktops",
    "Monitors",
    "Networking Devices",
    "Computer Components",
    "Printers & Ink",
    "Storage Devices",
    "Computer Accessories"
]

const Products = () => {
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector((state) => state.products);
    const [view, setView] = useState('grid');
    const [price, setPrice] = useState([10, 25000]);
    const [category, setCategory] = useState('');

    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        // Dispatch initial product fetch without category filters
        dispatch(getProduct(keyword, price, category));
    }, [dispatch, error, keyword, price, category]);


    const handleViewChange = (newView) => {
        setView(newView);
    };

    const handleChange = (_, newValue) => {
        setPrice(newValue);
    };

    const resetFilter = () => {
        setKeyword('')
        setPrice([10, 25000]);
        setCategory('');

    };
    // console.log(selectedSubcategories);

    // console.log(keyword);
    return (
        <>
            {
                loading ?
                    (<Loading />)
                    :
                    (<>
                        <div className='flex gap-10 min-h-screen px-12 pt-12'>
                            <div className='w-1/4 bg-slate-100 rounded-t-lg px-5'>
                                <button onClick={resetFilter} className='w-full h-12 bg-accent mt-12 rounded-md text-white text-xl'>Rest</button>
                                <input
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    type="text"
                                    placeholder='Search your product'
                                    className='w-full h-14 p-5 mt-10 border-2 border-secondary rounded-md outline-none border-opacity-50'
                                />
                                <div className='py-10'>
                                    <h1 className='text-left lato-regular text-xl border-b-2 pb-2 border-secondary border-opacity-50'>Filter by Category</h1>
                                    <div className='mt-5'>
                                        {categories.map((category, index) => (
                                            <li key={index} onClick={() => setCategory(category)}
                                                className='text-left lato-regular text-lg cursor-pointer'>
                                                {category}
                                            </li>
                                        ))}
                                    </div>
                                    <div className='mt-10'>
                                        <h1 className='text-left lato-regular text-xl border-b-2 pb-2 border-secondary border-opacity-50'>Filter by Price</h1>
                                        <div className='mt-5'>
                                            <Slider
                                                min={10}
                                                max={25000}
                                                value={price}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-slate-100 rounded-t-lg w-3/4'>

                                <div className='flex justify-end p-4 border-b-4'>
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
                                <div className={`${view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10' : 'flex flex-col'} px-10 pt-2`}>
                                    {products &&
                                        products.map((product) => (
                                            <Card
                                                key={product._id}
                                                product={product}
                                                view={view}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </>)
            }
        </>
    );
};

export default Products;

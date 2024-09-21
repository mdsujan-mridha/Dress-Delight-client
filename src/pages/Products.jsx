import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import { FaTh, FaBars, FaArrowAltCircleRight, FaArrowAltCircleDown } from 'react-icons/fa';
import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from '@mui/material';
import { BiExpand } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProduct } from '../redux/action/productAction';
import Loading from '../components/Loading';
import toast from 'react-hot-toast';


const categories = [
    {
        name: "Computers & Accessories",
        subcategories: [
            "Laptops",
            "Desktops",
            "Monitors",
            "Networking Devices",
            "Computer Components",
            "Printers & Ink",
            "Storage Devices",
            "Computer Accessories"
        ]
    },
    {
        name: "Electronics",
        subcategories: [
            "Mobile Phones",
            "Tablets",
            "Wearable Technology",
            "Audio & Headphones",
            "Cameras & Photography",
            "Televisions",
            "Home Entertainment",
            "Drones & Action Cameras"
        ]
    },
    {
        name: "Home Appliances",
        subcategories: [
            "Large Appliances",
            "Small Appliances",
            "Heating & Cooling",
            "Vacuum Cleaners",
            "Ironing & Laundry",
            "Water Purifiers"
        ]
    },
    {
        name: "Fashion",
        subcategories: [
            "Men's Fashion",
            "Women's Fashion",
            "Kids' Fashion",
            "Footwear",
            "Watches",
            "Accessories",
            "Jewelry"
        ]
    },
    {
        name: "Health & Beauty",
        subcategories: [
            "Skincare",
            "Haircare",
            "Makeup",
            "Fragrances",
            "Personal Care",
            "Health Devices",
            "Supplements"
        ]
    },
    {
        name: "Sports & Outdoors",
        subcategories: [
            "Fitness Equipment",
            "Outdoor Gear",
            "Sports Apparel",
            "Footwear",
            "Cycling",
            "Camping & Hiking",
            "Water Sports",
            "Team Sports"
        ]
    },
    {
        name: "Home & Garden",
        subcategories: [
            "Furniture",
            "Home Decor",
            "Kitchen & Dining",
            "Bedding",
            "Garden Supplies",
            "Tools & Home Improvement",
            "Lighting"
        ]
    },
    {
        name: "Toys, Kids & Baby",
        subcategories: [
            "Toys",
            "Baby Products",
            "Kids' Clothing",
            "Kids' Shoes",
            "Nursery",
            "Strollers & Car Seats",
            "Feeding"
        ]
    },
    {
        name: "Automotive",
        subcategories: [
            "Car Electronics",
            "Car Accessories",
            "Motorcycle Accessories",
            "Car Parts",
            "Tools & Equipment",
            "Tires & Wheels"
        ]
    },
    {
        name: "Books & Stationery",
        subcategories: [
            "Books",
            "E-Books",
            "Stationery",
            "Office Supplies",
            "Educational Supplies",
            "Art Supplies"
        ]
    }
];
const MAX = 100000;
const MIN = 100;
const marks = [
    {
        value: MIN,
        label: '',
    },
    {
        value: MAX,
        label: '',
    },
];

const Products = () => {
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector((state) => state.products);
    const [view, setView] = useState('grid');
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [val, setVal] = useState(MIN);
    const handleSubcategoryChange = (subcategory) => {
        let newSelectedSubcategories = [...selectedSubcategories];
        if (newSelectedSubcategories.includes(subcategory)) {
            newSelectedSubcategories = newSelectedSubcategories.filter(sub => sub !== subcategory);
        } else {
            newSelectedSubcategories.push(subcategory);
        }
        setSelectedSubcategories(newSelectedSubcategories);
    };

    // console.log(selectedSubcategories);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, []);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        dispatch(getProduct())
    }, [dispatch, error]);

    const handleViewChange = (newView) => {
        setView(newView);
    };

    const handleChange = (_, newValue) => {
        setVal(newValue);
    };

    return (
        <>
            {
                loading ?
                    (<Loading />)
                    :
                    (<>
                        <div className='flex gap-10 min-h-screen px-12 pt-12'>
                            <div className='w-1/4 bg-slate-100 rounded-t-lg px-5'>
                                <input
                                    type="text"
                                    placeholder='Search your product'
                                    className='w-full h-14 p-5 mt-10 border-2 border-secondary rounded-md outline-none border-opacity-50'
                                />
                                <div className='py-10'>
                                    <h1 className='text-left lato-regular text-xl border-b-2 pb-2 border-secondary border-opacity-50'>Filter by Category</h1>
                                    <div className='mt-5'>
                                        {categories.map((category, index) => (
                                            <Accordion key={index}>
                                                <AccordionSummary
                                                    expandIcon={<BiExpand />}
                                                    aria-controls='panel-content'
                                                    id={`panel-header-${index}`}
                                                >
                                                    <Typography className='text-left'>{category.name}</Typography>
                                                </AccordionSummary>
                                                {category.subcategories.map((subcat, subIndex) => (
                                                    <AccordionDetails key={subIndex}>
                                                        <input
                                                            type="checkbox"
                                                            value={subcat}
                                                            onChange={() => handleSubcategoryChange(subcat)}
                                                        />
                                                        <label className='ml-3'>{subcat}</label>
                                                    </AccordionDetails>
                                                ))}
                                            </Accordion>
                                        ))}
                                    </div>
                                    <div className='mt-10'>
                                        <h1 className='text-left lato-regular text-xl border-b-2 pb-2 border-secondary border-opacity-50'>Filter by Price</h1>
                                        <div className='mt-5'>
                                            <Slider
                                                min={MIN}
                                                max={MAX}
                                                step={100}
                                                marks={marks}
                                                value={val}
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

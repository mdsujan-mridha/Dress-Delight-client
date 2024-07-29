import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import { FaTh, FaBars } from 'react-icons/fa'; // Assuming you have react-icons installed
import { FaArrowAltCircleRight } from "react-icons/fa";
import {Slider} from '@mui/material';


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
    const [products, setProducts] = useState([]);
    const [view, setView] = useState('grid'); // State to manage view
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

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleViewChange = (newView) => {
        setView(newView);
    };

    // handle price 
    const handleChange = (_, newValue) => {
        setVal(newValue);
    };

    console.log(selectedSubcategories);

    return (
        <>
            <div className='flex gap-10 min-h-screen px-12 pt-12'>
                <div className='w-1/4 bg-slate-100 rounded-t-lg px-5'>
                    <input type="text"
                        placeholder='Search your product'
                        className='w-full h-14 p-5 mt-10 border-2 border-secondary rounded-md outline-none border-opacity-50'
                    />
                    <div className='py-10'>
                        <h1 className='text-left lato-regular text-xl border-b-2 pb-2 border-secondary border-opacity-50'> Filter by Category </h1>
                        <div className='mt-5'>
                            {categories.map(category => (
                                <div className="category-container" key={category.name}>
                                    <div className='w-full h-12 border-2 border-primary rounded-2xl flex justify-between items-center pl-2 pr-3'>
                                        <h2 className=''>{category.name}</h2>
                                        <FaArrowAltCircleRight />

                                    </div>

                                    <div className="subcategories ml-10">
                                        {category.subcategories.map(subcategory => (
                                            <div className="subcategory-item" key={subcategory}>
                                                <input
                                                    type="checkbox"
                                                    value={subcategory}
                                                    onChange={() => handleSubcategoryChange(subcategory)}
                                                />
                                                <label className='ml-3'>{subcategory}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h1 className='text-left lato-regular text-xl border-b-2 pb-2 border-secondary border-opacity-50'> Filter by price </h1>
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

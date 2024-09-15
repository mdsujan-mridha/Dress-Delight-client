import { Dialog, DialogContent, Modal, Rating } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useParams } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(data => setProduct(data))
        }
        fetchProduct();
    }, [id]);

    const ratingValue = product?.rating?.rate

    // function for select product image 
    const handleImageChange = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    }
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };
    const handleModalOpen = () => {
        setModalVisible(true);
    }
    const handleModalClose = () => {
        setModalVisible(false);
    };
    const handleClick = () => {
        handleImageChange(product?.image); // Call this function if needed
        handleModalOpen(); // Open the modal
    };
    const sizes = ["S", "M", "L", "XL", "XXL"];
    // console.log(product?.rating.rate);

    // console.log(product?.rating?.rate);
    // console.log(typeof(ratingValue));
    // console.log(ratingValue);
    console.log(product);
    return (
        <Fragment>
            <div className='min-h-screen px-12 w-full pt-24 mb-14'>
                <div className="flex h-96 justify-between items-center gap-5">
                    <div style={{ width: "600px", height: "600px", objectFit: "contain", marginTop: "50px" }} className='border-2'>
                        <Carousel style={{ width: "600px", height: "600px", objectFit: "cover" }}>
                            <img
                                src={product?.image} alt={product?.title}
                                style={{ width: "600px", height: "600px", objectFit: "contain" }}
                                className=' cursor-pointer'

                                onClick={handleClick}
                            />
                        </Carousel>
                    </div>
                    <div className='w-1/2 flex justify-start flex-col gap-5'>
                        <h1 className='lato-bold text-4xl'> {product?.title} </h1>
                        <div className='flex justify-start gap-5 items-center'>
                            <Rating
                                name='text-feedback'
                                readOnly
                                size='large'
                                value={ratingValue}
                                precision={0.5}
                                sx={{
                                    color: "#ffc107",
                                    fontSize: "30px",
                                    fontWeight: "bold"
                                }}
                            /> <span className=' font-bold'> {product?.rating?.count} Reviews </span>
                        </div>
                        <h2 className='text-3xl font-regular lato-regular'> BDT: <span className='text-accent'>{product?.price}</span> Tk </h2>
                        <p className='text-justify text-xl lato-regular font-semibold'>{product?.description}</p>
                        <div className='mt-5'>
                            <select
                                id='size-select'
                                value={selectedSize}
                                onChange={handleSizeChange}
                                className='px-5 py-3 border rounded-md w-44'
                            >
                                <option value='' className='text-xl font-bold'>Select Size</option>
                                {sizes.map(size => (
                                    <option key={size} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                        <div className='mt-3'>
                            <button className='px-5 py-3 border rounded-md w-44 bg-accent text-white font-bold'> Add to Cart </button>
                        </div>
                        <p className='font-regular text-md lato-light'> Category: {product?.category} </p>
                        <p className='font-regular text-md lato-light'> Tags: {product?.tags} </p>
                    </div>
                </div>
                <Dialog
                    open={isModalVisible}
                    onClose={handleModalClose}

                >
                    <DialogContent

                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            zIndex: "9999",
                        }}
                    >
                        <TransformWrapper>
                            <TransformComponent>
                                <img src={selectedImage} alt={product?.title} className='w-full h-full' />
                            </TransformComponent>
                        </TransformWrapper>

                    </DialogContent>

                </Dialog>
                <div className='mt-72'>
                    <Tabs>
                        <TabList>
                            <Tab>Description</Tab>
                            <Tab> Reviews ({product?.rating?.count}) </Tab>
                        </TabList>

                        <TabPanel>
                            <h2 className='text-justify font-semibold lato-regular text-xl py-5 px-2'>  {product.description} </h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </Fragment >
    );
};

export default ProductDetails;
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating, TextField } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useParams } from 'react-router-dom';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProductDetails, newReview } from '../redux/action/productAction';
import Loading from '../components/Loading';
import { addItemToCart } from '../redux/action/cartAction';
import toast from 'react-hot-toast';
import { NEW_REVIEW_REQUEST } from '../redux/constant/productConstant';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.productDetails);
    const { success, error: reviewError } = useSelector((state) => state.newReview);
    const { id } = useParams();
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        if (reviewError) {
            toast.error(reviewError);
            dispatch(clearErrors())
        }
        if (success) {
            toast.success('Review submitted successfully');
            dispatch({ type: NEW_REVIEW_REQUEST })
        }

        dispatch(getProductDetails(id))
    }, [dispatch, id, error, reviewError, success]);

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
        handleImageChange(product?.image.url); // Call this function if needed
        handleModalOpen(); // Open the modal
    };

    const addToCartHandler = () => {
        dispatch(addItemToCart(id, quantity));
        toast.success("Item added to cart");
    }

    // review handler 
    const submitReviewToggle = () => {
        open ? setOpen(false) : setOpen(true);
    }
    const reviewSubmitHandler = () => {
        const myForm = new FormData();

        myForm.append("rating", rating);
        myForm.append("comment", comment);
        myForm.append("productId", id);
        dispatch(newReview(myForm));
        setOpen(false);

    }


    const sizes = ["S", "M", "L", "XL", "XXL"];
    // console.log(product.image)

    return (
        <Fragment>
            {
                loading ?
                    (<Loading />)
                    :
                    (<Fragment>
                        <div className='min-h-screen px-12 w-full pt-24 mb-14'>
                            <div className="flex h-auto justify-between items-center gap-5">
                                <div style={{ width: "600px", height: "600px", objectFit: "contain", marginTop: "50px" }} className='border-2'>
                                    <Carousel style={{ width: "600px", height: "600px", objectFit: "cover" }}>
                                        {
                                            product?.images &&
                                            product?.images?.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image.url}
                                                    alt={`Product Image ${index + 1}`}
                                                    style={{ width: "600px", height: "600px", objectFit: "cover" }}
                                                    onClick={() => handleImageChange(image.url)}
                                                />
                                            ))
                                        }
                                    </Carousel>
                                </div>
                                <div className='w-1/2 flex justify-start flex-col gap-5'>
                                    <h1 className='lato-bold text-4xl'> {product?.name} </h1>
                                    <div className='flex justify-start gap-5 items-center'>
                                        <Rating
                                            name='text-feedback'
                                            readOnly
                                            size='large'
                                            value={product.ratings}
                                            precision={0.5}
                                            sx={{
                                                color: "#ffc107",
                                                fontSize: "30px",
                                                fontWeight: "bold"
                                            }}
                                        /> <span className=' font-bold'> {product?.numOfReviews} Reviews </span>
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
                                        <button
                                            className='px-5 py-3 border rounded-md w-44 bg-accent text-white font-bold'
                                            onClick={addToCartHandler}
                                        > Add to Cart </button>
                                    </div>
                                    <p className='font-regular text-md lato-light'> Category: {product?.category} </p>
                                    <p className='font-regular text-md lato-light'> Tags: {product?.tags} </p>

                                    <button
                                        className='px-5 py-3 border rounded-md w-44 bg-accent text-white font-bold'
                                        onClick={submitReviewToggle}
                                    > Submit Review </button>
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
                                            <img src={selectedImage} alt={product?.name} className='w-full h-full' />
                                        </TransformComponent>
                                    </TransformWrapper>
                                </DialogContent>
                            </Dialog>
                            {/* review submit  */}
                            <Dialog
                                aria-labelledby='simple-dialog-title'
                                open={open}
                                onClose={submitReviewToggle}
                            >

                                <DialogTitle>Submit Review</DialogTitle>
                                <DialogContent className="submitDialog">
                                    <Rating
                                        onChange={(e) => setRating(e.target.value)}
                                        value={rating}
                                        size="large"
                                    />

                                    <TextField
                                        required
                                        label="Review"
                                        variant="outlined"
                                        fullWidth
                                        margin='normal'
                                        type="text"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    ></TextField>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={submitReviewToggle} color="secondary">
                                        Cancel
                                    </Button>
                                    <Button onClick={reviewSubmitHandler} color="primary">
                                        Submit
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            <div className='mt-72 h-auto'>
                                <Tabs>
                                    <TabList>
                                        <Tab>Description</Tab>
                                        <Tab> Reviews ({product?.numOfReviews}) </Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h2 className='text-justify font-semibold lato-regular text-xl py-5 px-2'>  {product.description} </h2>
                                    </TabPanel>
                                    <TabPanel>
                                        {
                                            product?.reviews?.map((review, index) => (
                                                <div key={index} className='flex justify-start items-center gap-5 px-12'>
                                                    <div className='flex justify-start items-center gap-5'>
                                                        <p className='font-bold'> {review.name} </p>
                                                    </div>
                                                    <p className='font-regular text-md lato-light'> {review.comment} </p>
                                                </div>
                                            ))
                                        }
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </Fragment >)
            }
        </Fragment>
    );
};

export default ProductDetails;
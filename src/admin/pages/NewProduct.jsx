import React, { Fragment, useEffect, useState } from 'react';
import MetaData from '../../components/MetaData';
import Sidebar from '../component/Sidebar';
import { AccountTree, AttachMoney, Description, Spellcheck, Storage } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { clearErrors, createProduct } from '../../redux/action/productAction';
import toast from 'react-hot-toast';
import { NEW_PRODUCT_RESET } from '../../redux/constant/productConstant';

const NewProduct = () => {
    const dispatch = useDispatch();
    const { error, loading, success } = useSelector((state) => state.newProduct);
    // state for new product 
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [Stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
    ];
    // new product handler 
    const createProductSubmitHandler = (e) => {
        e.preventDefault();

        // Ensure all fields are properly populated
        if (!name || !price || !description || !category || !Stock || images.length === 0) {
            console.error("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("stock", Stock); // Changed "Stock" to lowercase for consistency

        images.forEach((image, index) => {
            console.log(`Adding image ${index + 1}:`, image);
            formData.append("images", image); // Ensure image is a File object
        });

        // Log FormData contents (For debugging, use a polyfill to log FormData contents in non-browser environments)
        // for (let [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }

        // Dispatch action
        dispatch(createProduct(formData));
    };


    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });

    }


    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        if (success) {
            toast.success("Product created successfully");
            navigate("/admin/dashboard")
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, error, success, navigate])

    return (
        <Fragment>
            <MetaData title="Create Product" />
            <div className="dashboard">
                <Sidebar />
                <div className="newProductContainer">
                    <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={createProductSubmitHandler}
                    >
                        <h1>Create Product</h1>

                        <div>
                            <Spellcheck />
                            <input
                                type="text"
                                placeholder="Product Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <AttachMoney />
                            <input
                                type="number"
                                placeholder="Price"
                                required
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div>
                            <Description />

                            <textarea
                                placeholder="Product Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                cols="30"
                                rows="1"
                            ></textarea>
                        </div>

                        <div>
                            <AccountTree />
                            <select onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Choose Category</option>
                                {categories.map((cate) => (
                                    <option key={cate} value={cate}>
                                        {cate}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <Storage />
                            <input
                                type="number"
                                placeholder="Stock"
                                required
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>

                        <div id="createProductFormFile">
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={createProductImagesChange}
                                multiple
                            />
                        </div>

                        <div id="createProductFormImage">
                            {imagesPreview.map((image, index) => (
                                <img key={index} src={image} alt="Product Preview" />
                            ))}
                        </div>

                        <Button
                            id="createProductBtn"
                            type="submit"
                            disabled={loading ? true : false}
                        >
                            Create
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default NewProduct;
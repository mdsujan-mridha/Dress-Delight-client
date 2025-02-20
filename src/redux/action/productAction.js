import axios from "axios";
import {
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_REVIEW_FAIL,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    CLEAR_ERRORS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS
} from "../constant/productConstant";


export const getProduct = (keyword = '', price = [10, 25000], category) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        let link = `http://localhost:5000/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

        if (category) {
            link = `http://localhost:5000/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
        }

        const { data } = await axios.get(link);

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error?.error?.response?.data?.message,
        });
    }
};

// get single products details 
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            // if i get product Which in need then set it on payload 
            payload: data.product
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error?.error?.response?.data?.message,
        });
    }
};

//new review action 

export const newReview = (reviewData) => async (dispatch) => {

    try {
        dispatch({ type: NEW_REVIEW_REQUEST })
        const config = {
            headers: { "Content-Type": "application/json" }
        };
        const data = await axios.put(`http://localhost:5000/api/v1/review`, reviewData, config);
        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }

}

// get all product by admin  
export const getAdminProduct = () => async (dispatch) => {

    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/admin/products`)
        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }

}


// delete product by admin 
export const deleteProduct = (id) => async (dispatch) => {

    try {

        dispatch({
            type: DELETE_PRODUCT_REQUEST
        })
        const { data } = await axios.delete(`http://localhost:5000/api/v1/admin/product/${id}`)
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }

}
// create new product by admin 
export const createProduct = (productData) => async (dispatch) => {

    try {
        dispatch({ type: NEW_PRODUCT_REQUEST })
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        // console.log(productData);
        const data = await axios.post(`http://localhost:5000/api/v1/admin/product/new`, productData, config)
        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response?.data.message
        })
    }

}
export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST })
        const { data } = await axios.put(`http://localhost:5000/api/v1/admin/product/${id}`, productData)
        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success,
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}
// gate all review by admin 
export const getAllReviews = (id) => async (dispatch) => {
    try {
        dispatch({ type: ALL_REVIEW_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/reviews?id=${id}`)
        dispatch({
            type: ALL_REVIEW_SUCCESS,
            payload: data.reviews,
        })
    } catch (error) {
        dispatch({
            type: ALL_REVIEW_FAIL,
            payload: error.response.data.message,
        })
    }
}

// delete review by admin 
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_REVIEW_REQUEST });

        const { data } = await axios.delete(
            `http://localhost:5000/api/v1/reviews?id=${reviewId}&productId=${productId}`
        );

        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
import axios from "axios";
import {
    CLEAR_ERRORS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
} from "../constant/userConstant";

export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: LOGIN_REQUEST });
        const config = { header: { "Content-type": "application/json" } }
        // console.log("Data from action",email, password);
        const { data } = await axios.post(`http://localhost:5000/api/v1/user/login`, { email, password })
        dispatch({ type: LOGIN_SUCCESS, payload: data.user });

    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }

};

//  register 
export const register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST });
        const config = { headers: { "Content-type": "multipart/form-data" } };
        const { data } = await axios.post(`http://localhost:5000/api/v1/user/register`, userData, config);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error?.response?.data?.message,
        })
    }
}

// load user 
export const loadUser = () => async (dispatch) => {
    try {
 
       dispatch({ type: LOAD_USER_REQUEST });
       const { data } = await axios.get(`http://localhost:5000/api/v1/user/me`)
       dispatch({ type: LOAD_USER_SUCCESS, payload: data.user })
 
    } catch (error) {
       dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message })
    }
 }










// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}
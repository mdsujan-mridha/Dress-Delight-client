import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer } from "./src/redux/reducer/userReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
    newProductReducer,
    newReviewReducer,
    productDetailsReducer,
    productReducer,
    productReviewReducer,
    productsReducer,
    reviewReducer
} from "./src/redux/reducer/productReducer";


const reducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    product: productReducer,
    reviews: productReviewReducer,
    review: reviewReducer,
    newProduct: newProductReducer,
    newReview: newReviewReducer,
});

// initial satate 
let initialState = {};

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
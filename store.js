import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { allUserReducer, profileReducer, userReducer } from "./src/redux/reducer/userReducer";
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
import { cartReducer } from "./src/redux/reducer/cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./src/redux/reducer/orderReducer";


const reducer = combineReducers({
    user: userReducer,
    allUsers:allUserReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    product: productReducer,
    reviews: productReviewReducer,
    review: reviewReducer,
    newProduct: newProductReducer,
    newReview: newReviewReducer,
    cart: cartReducer,
    order: orderReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    profile: profileReducer,

});

// initial satate 
let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ?
            JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
};

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
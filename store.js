import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer } from "./src/redux/reducer/userReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";


const reducer = combineReducers({
    user: userReducer,
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
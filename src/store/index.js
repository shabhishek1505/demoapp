import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";

const reducers = combineReducers({
    //cart
    cart: cartReducer,
    //product
    user: userReducer


})


export default createStore(reducers, applyMiddleware(thunk));
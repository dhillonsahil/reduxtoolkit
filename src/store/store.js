import { configureStore } from "@reduxjs/toolkit";
import createReducer from './CartSlice'
import productReducer from "./productSlice";
const store = configureStore({
    reducer:{
        cart:createReducer,
        product:productReducer
        // we can add every slice reducer here
    },
})

export default store;
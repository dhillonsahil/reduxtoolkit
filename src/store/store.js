import { configureStore } from "@reduxjs/toolkit";
import createReducer from './CartSlice'
const store = configureStore({
    reducer:{
        cart:createReducer,
        // we can add every slice reducer here
    },
})

export default store;
import { createSlice } from "@reduxjs/toolkit";

// using it as enum freeze make it read only
export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'errror',
    LOADING:'loading'
})


const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },
    reducers:{
        setProducts(state,action){
            // never do async function use in reducers
            state.data=action.payload;
        },
        setStatus(state,action){
            state.status=action.payload;
        }
    }   
})

export const {setProducts,setStatus} =productSlice.actions;
export default productSlice.reducer

// Thunks
// thunk is a programming term that means a peace of code that does same delayed work.
export function fetchProducts(){
    // thunk is a funtion and from which we return function
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log("Error !")
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
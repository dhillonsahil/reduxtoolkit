import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
        // setProducts(state,action){
        //     // never do async function use in reducers
        //     state.data=action.payload;
        // },
        // setStatus(state,action){
        //     state.status=action.payload;
        // }

        // for toolkit thunk we have commited this and added extra reducers
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status=STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status=STATUSES.IDLE
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status=STATUSES.ERROR
        })
    }   
})

export const {setProducts,setStatus} =productSlice.actions;
export default productSlice.reducer

// Thunks
// thunk is a programming term that means a peace of code that does same delayed work.
// export function fetchProducts(){
//     // thunk is a funtion and from which we return function
//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const response = await fetch('https://fakestoreapi.com/products')
//             const data = await response.json()
//             setProducts(data)
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             console.log("Error !")
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }
// above thunk was basic and by redux ,in redux toolkit we have another

export const fetchProducts = createAsyncThunk('products/fetch',async()=>{
    // first parameter was simply a identifier and 2nd is async fun

            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            return data;
})
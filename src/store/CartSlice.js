const { createSlice } = require("@reduxjs/toolkit")

// const initialState=[]

const cartSlice =createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            // pure functions don't change the data outside the fn
            // reducers change the state
            // in normal redux return[...state,action.payload]
            state.push(action.payload);
        },
        remove(state,action){
            state=state.filter(item=>item.id!== action.payload)
        },
    },
})

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;
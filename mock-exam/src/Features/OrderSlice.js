import { createSlice } from "@reduxjs/toolkit";
const initialState=[]
export const orderSlice = createSlice({
    name:"orders",
    initialState,
    reducers:{
        addOrder(state,action){
            state.push(action.payload)
        }
    }
});

//export the addOrder function

export default orderSlice.reducer;
export const {addOrder} =orderSlice.actions
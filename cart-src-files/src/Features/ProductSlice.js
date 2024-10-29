import { createSlice } from "@reduxjs/toolkit";
//Import the ProductsData from the ProductsData.js file.
import ProductsData  from "../ProductsData";
//Create a variable for the initialState and assign the data from the ProductsData
const initialState=ProductsData
export const productSlice = createSlice({
//create the reducters
name:'products',
initialState,
reducers:{
    addProducts(state,action){
        state.push(action.payload)
    },
    deleteProduct(state,action){
        return state.filter((product)=>product.id !== action.payload)
    },
    updateProduct(state,action){
        const product=state.find((p)=>p.id === action.payload.id)
        if (product){
            product.id=action.payload.id;
            product.title=action.payload.title;
            product.price=action.payload.price;
            product.images=action.payload.images;
        }
    }
}

});
//export all the action
export const {addProducts,deleteProduct,updateProduct}=productSlice.actions

//export the reducer
export default productSlice.reducer
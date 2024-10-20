import { createSlice } from "@reduxjs/toolkit";
import CustomerData from "../CustomerData";
const initialState=CustomerData
const userSlice=createSlice({
    name:"users",
    initialState:initialState,
    reducers:{
        addCustomer(state,action){
            state.push(action.payload) //payload is value coming from the component
        },
        deleteCustomer(state,action){
            return state.filter((customer)=>customer.id !== action.payload)
        },
        updateCustomer(state,action){
            const customer = state.find(cust=>cust.id===action.payload.id)
            if (customer){
                customer.name=action.payload.name;
                customer.email=action.payload.email;
                customer.password=action.payload.password
            }
        }
    }
})
export default userSlice.reducer;
export const {addCustomer,deleteCustomer,updateCustomer}=userSlice.actions
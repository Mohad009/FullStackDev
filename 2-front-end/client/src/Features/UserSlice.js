import { createSlice } from "@reduxjs/toolkit";
import UsersData from "../ExampleData";

const initialState=UsersData

export const userSlice =createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        deleteUser(state,action){
            return state.filter((user)=>user.id !== action.payload)
        },
        updateUser(state,action){
            const user=state.find((u)=>u.id===action.payload.id)
            if (user){
                user.id=action.payload.id;
                user.name=action.payload.name;
                user.email=action.payload.email;
                user.password=action.payload.password;
            }
        }
    }
})

export default userSlice.reducer
export const {addUser,deleteUser,updateUser} =userSlice.actions
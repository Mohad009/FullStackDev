import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../Features/User'
export const store=configureStore({
    reducer:{
        users:usersReducer
    },
})
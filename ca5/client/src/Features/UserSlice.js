
import {createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = []


export const userSlice = createSlice({
  name: "users", //name of the state
  initialState, // initial value of the state
  reducers: {},
});

//export const { } = userSlice.actions; //export the function

export default userSlice.reducer;


import {createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { UsersData } from "../ExampleData";

//logout
export const logout=createAsyncThunk("users/logout",async()=>{
  try{
    const response =await axios.post("http://localhost:3001/logout")
    const msg=response.data.msg
    console.log(msg)
    return ({msg})
  }catch(e){
console.log(e)
  }
})

//login
export const login=createAsyncThunk(
  "users/login",
  async(userData,{rejectWithValue})=>{
    try{
const response= await axios.post("http://localhost:3001/login",{
  email:userData.email,
  password:userData.password
})
const user=response.data.user;
const msg=response.data.msg;
return({user,msg})
    }
    catch(e){
      const msg=e.response.data.msg
      return rejectWithValue({msg})
    }
  }
)




const initialState = {
user:null,
isloading:false,
isSuccess:false,
isError:false,
msg:null,
isLogin:false,
}

export const registerUser=createAsyncThunk(
  "users/registerUser",
  async(userData)=>{
    try{
      const response =await axios.post("http://localhost:3001/registerUser", {
        name:userData.name,
        email:userData.email,
        password:userData.password
      });
      console.log(response)
      const user=response.data.user;
      return user
    }
    catch(error){
      console.log(error)
    }
  }
);

export const userSlice = createSlice({
  name: "users", //name of the state
  initialState, // initial value of the state
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(registerUser.pending,(state)=>{
      state.isloading=true
    }).addCase(registerUser.fulfilled,(state,action)=>{
      state.isSuccess=true
    })
    .addCase(registerUser.rejected,(state)=>{
      state.isloading=false
    })

    builder.addCase(login.pending,(state)=>{
      console.log("login pending")
      state.isloading=true

    }).addCase(login.fulfilled,(state,action)=>{
      state.isLogin = true;
      state.user = action.payload.user;
      state.msg = action.payload.msg;

    
    })
    .addCase(login.rejected,(state,action)=>{
      console.log("login rejected")
      state.isloading=false
      state.isLogin=false
      state.user=null
      state.msg=action.payload.msg
    })

    .addCase(logout.pending, (state) => {
      state.isloading = true;
    })
    .addCase(logout.fulfilled, (state,action) => {
      // Clear user data or perform additional cleanup if needed
      state.isLogin = false;
      state.user = null;
      state.msg = action.payload.msg;
    })
    .addCase(logout.rejected, (state) => {
      state.isError = true;
    });




  }
});
//export const { } = userSlice.actions; //export the function

export default userSlice.reducer;

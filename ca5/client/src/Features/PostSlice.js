import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//get post
export const getPosts=createAsyncThunk("posts/getPosts",async()=>{
  try{
    const response=await axios.get("http://localhost:3001/getPost")
    return response.data.posts
    console.log(response)
  }catch(e){
    console.log(e)
  }
})


//post message
export const savePost=createAsyncThunk("posts/savePost",async(postData)=>{
    console.log(postData)
    
    try{
        const response=await axios.post("http://localhost:3001/savePost",{
            postMsg:postData.postMsg,
            email:postData.email
        });
        const post=response.data.post
        const msg=response.data.msg
        return ({post,msg})
    }
    catch(e){
        console.log(e)
    }
})

const initialState={
    status: "idle",
    posts: [],
    comments: [],
    likes: [],
}
const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
          .addCase(savePost.pending, (state) => {
            state.status = "loading";
          })
          .addCase(savePost.fulfilled, (state, action) => {
            console.log(action.payload);
            state.status = "succeeded";
            // Update the state with fetched posts adding the latest post in the beginning
            state.posts.unshift(action.payload);
          })
          .addCase(savePost.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });


          builder.addCase(getPosts.pending, (state) => {
            state.status = "loading";
          })
          .addCase(getPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            // Update the state with fetched posts
            console.log(action.payload);
            state.posts = action.payload;
          })
          .addCase(getPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });
    
      },
    });
  



export default postSlice.reducer;
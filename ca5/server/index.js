import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./Models/UserModel.js";
import bcrypt from "bcrypt"
import PostModel from './Models/PostModel.js'
const app=express()
app.use(express.json()) //to send the data in javascript object notation , document
app.use(cors())
const connectionString="mongodb+srv://admin:admin@postitcluster.t8jci.mongodb.net/postITdb?retryWrites=true&w=majority&appName=PostITCluster"
mongoose.connect(connectionString)
app.listen(3001,()=>{console.log("Connected to server and mongodb")})

//register new user
app.post("/registerUser",async(req,res)=>{

    try{
        const hashedpassword=await bcrypt.hash(req.body.password,10)
        const user=new UserModel({
            name:req.body.name,
            email:req.body.email,
            password:hashedpassword
        })
        await user.save()
        res.send({user:user,msg:'User Added successfully'})

    }
    catch(error){
        res.status(500).json({error:error.message})
    }
 
})


// login route
app.post('/login',async(req,res)=>{
try{
    const {email,password}=req.body;
    const user=await UserModel.findOne({email:email})
    if(!user){
        return res.status(500).json({msg:'User not found'})
    }
    const passwordMatch=await bcrypt.compare(password,user.password)
    if(!passwordMatch){
        return res.status(401).json({msg:'login failed'})

    }
    res.status(200).json({user,msg:'Success'})
}
catch{
    res.status(500).json({msg:"something went wrong"})
}
})


//logout
app.post("/logout",async(req,res)=>{
    res.status(200).json({msg:"Logged out successfully"})
})



//POST API - savePost
app.post("/savePost", async (req, res) => {
    try {
      const post = new PostModel({
        postMsg: req.body.postMsg,
        email: req.body.email,
      });
  
      await post.save();
      res.send({ post: post, msg: "Post successfull" });
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  });


//get post api
app.get('/getPost',async(req,res)=>{
    try{
        const posts=await PostModel.find({}).sort({createdAt: -1})
        const countPost=await PostModel.countDocuments({})
        res.send({posts:posts,count:countPost})
    }catch(e){
        console.error(e)
        res.status(500).json({error:"An error occurred"})
    }
})
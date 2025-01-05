import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./Models/UserModel.js";
import bcrypt from "bcrypt"
import PostModel from './Models/PostModel.js'
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import path,{dirname} from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app=express()
app.use(express.json()) //to send the data in javascript object notation , document
app.use(cors())
const connectionString=`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@postitcluster.t8jci.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority&appName=PostITCluster`
mongoose.connect(connectionString)

// Serve static files from the 'uploads' directory

// Convert the URL of the current module to a file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name from the current file path
const __dirname = dirname(__filename);

// Set up middleware to serve static files from the 'uploads' directory
// Requests to '/uploads' will serve files from the local 'uploads' folder
app.use("/uploads", express.static(__dirname + "/uploads"));


// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});
// Create multer instance
const upload = multer({ storage: storage });

app.listen(process.env.PORT,()=>{console.log("Connected to server and mongodb")})

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

//update like
app.put('/likePost/:postId',async(req,res)=>{
    const id=req.params.postId
    const userId=req.body.userId;
    try{
        const postToUpdate=await PostModel.findOne({_id:id})
        if(!postToUpdate){
            return res.status(404).json({msg:"post not found"})
        }

        const userIndex=postToUpdate.likes.users.indexOf(userId)
        if(userIndex !==-1){
            const updatePost=await PostModel.findOneAndUpdate(
                {_id:id},
                {
                    $inc:{"likes.count":-1},
                    $pull:{"likes.users":userId}
                },
                {new :true}
            );
            res.json({post:updatePost,msg:"Post Unliked"})
        }
        else{
                    // User hasn't liked the post, so like it
        const updatedPost = await PostModel.findOneAndUpdate(
            { _id: id },
            {
              $inc: { "likes.count": 1 }, // Increment the like count
              $addToSet: { "likes.users": userId }, // Add userId to the users array if not already present
            },
            { new: true } // Return the modified document
          );
    
          res.json({ post: updatedPost, msg: "Post liked." });
  
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({error:"Something wrong happend"})
        
    }
})


//updata user profile
app.put("/updateUserProfile/:email",upload.single("profilePic"),async (req, res) => {
    //Retrieve the value from the route
    const email = req.params.email;
    //Retrieve the values from the request body.
    const name = req.body.name;
    const password = req.body.password;
  
    try {
      // Search for the user that will be updated using the findOne method
      const userToUpdate = await UserModel.findOne({ email: email });
  
      // Check if the user was found
      if (!userToUpdate) {
        return res.status(404).json({ error: "User not found, for some reason" });
      }
              // Check if a file was uploaded and get the filename
              let profilePic = null;
              if (req.file) {
                profilePic = req.file.filename; // Filename of uploaded file
                // Update profile picture if a new one was uploaded but delete first the old image
                if (userToUpdate.profilePic) {
                  const oldFilePath = path.join(
                    __dirname,
                    "uploads",
                    userToUpdate.profilePic
                  );
                  fs.unlink(oldFilePath, (err) => {
                    if (err) {
                      console.error("Error deleting file:", err);
                    } else {
                      console.log("Old file deleted successfully");
                    }
                  });
                  userToUpdate.profilePic = profilePic; // Set new profile picture path
                }
              } else {
                console.log("No file uploaded");
              }
      
      // Update the user's name
      userToUpdate.name = name;
    
      //if the user changed the password, change the password in the Db to the new hashed password
      if (password !== userToUpdate.password) {
        const hashedpassword = await bcrypt.hash(password, 10);
        userToUpdate.password = hashedpassword;
      } else {
        //if the user did not change the password
        userToUpdate.password = password;
      }
  
      // Save the updated user
      await userToUpdate.save(); // Make sure to save the changes
  
      // Return the updated user as a response
      res.send({ user: userToUpdate, msg: "Updated." });

    } catch (err) {
      // Handle errors, including database or validation issues
      res.status(500).json({ error: err.message }); // Send a more descriptive error message
    }
  });


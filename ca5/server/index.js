import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./Models/UserModel.js";
import bcrypt from "bcrypt"
const app=express()
app.use(express.json()) //to send the data in javascript object notation , document
app.use(cors())
const connectionString="mongodb+srv://admin:admin@postitcluster.t8jci.mongodb.net/postITdb?retryWrites=true&w=majority&appName=PostITCluster"
mongoose.connect(connectionString)
app.listen(3001,()=>{console.log("Connected to server and mongodb")})


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
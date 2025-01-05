import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import CourseRegModel from "./Models/CourseRegModel.js";
import * as dotenv from "dotenv"


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();



const URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@postitcluster.t8jci.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority&appName=PostITCluster`
mongoose.connect(URI);
app.listen(process.env.PORT, () => {
   console.log("You are connected");
});

//Express API method to receive the course registration data from the client and insert it into the CourseRegInfos collection.
app.post("/registerCourses",async(req,res)=>{
   const {studentId,semester,academicYear,courses}=req.body
   try {
      const registered = new CourseRegModel({
         studentId,
         semester,
         academicYear,
         courses,
      });
      await registered.save();
      res.status(200).json({ registered, msg: "Register successfully" });
   } catch (error) {
      res.status(500).json({ error: "Registration failed" });
   }
})



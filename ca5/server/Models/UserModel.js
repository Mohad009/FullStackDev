import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    profilePic:{type:String, default:"user.png"},
})

const UserModel=mongoose.model("userinfos",userSchema)
export default UserModel
import mongoose from "mongoose";

const mainSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:Number,
        required:true,
    },
    emergencyNo:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
})  

export const User = mongoose.model("MainUser", mainSchema);
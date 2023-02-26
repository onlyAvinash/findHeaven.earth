const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema=new Schema({
    username:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 
    },
    role:String
})

const userModel=mongoose.model("users",userSchema);

module.exports=userModel;
import mongoose, { Mongoose } from "mongoose";
import { type } from "os";



const{adminSchema}=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const admin=mongoose.model('admin',adminSchema)

export default admin
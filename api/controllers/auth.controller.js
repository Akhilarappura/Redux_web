import { compareSync } from "bcrypt";
import user from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';





export const signup=async(req,res)=>{
  const{username,email,password}=req.body;
  const hashedPassword=bcryptjs.hashSync(password,10)
  const newUser=new user({username,email,password:hashedPassword})
  try{
    await newUser.save()
  res.status(201).json({message:'sended succesfullly'})
    

  }catch(err){
    res.status(500).json(err.message)
  }
  
}

export const signin=async(req,res,next)=>{
    const{email,password}=req.body
    try {
        const validUser=await user.findOne({email})
        if(!validUser) return next(errorHandler(404 ,'User not found'))
         const validpassword=compareSync(password,validUser.password)
        if(!validpassword)return next(errorHandler(404,'Wrong credentials'))  
       
           
       const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
       const {password:hashedPassword,...rest}=validUser._doc
       const expiryDate=new Date(Date.now()+3600000)
       res.cookie('accestoken',token,{httpOnly:true  ,expires:expiryDate}).status(200).json(rest)
    } catch (error) {
        next(error)
        
    }
}
import user from "../models/user.model.js";

export const signup=async(req,res)=>{
  const{username,email,password}=req.body;
  const newUser=new user({username,email,password})
  try{
    await newUser.save()
  req.status(201).json({message:'sended succesfullly'})
    

  }catch(err){
    res.status(500).json(err.message)
  }
  
}
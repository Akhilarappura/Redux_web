import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();


mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to mongoDB');
    
}).catch((err)=>{
    console.log(err);
    
})

const app=express()

app.use(express.json())
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.listen(3001,()=>{
    console.log(`server is running on port 3001`);
    
});


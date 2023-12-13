import app from "./app.js";
import {config} from 'dotenv'
import database from "./config/database.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
import NodeCron from 'node-cron' 
import { Stats } from "./models/Stats.js";

config({
    path:"./config/config.env"
})


cloudinary.v2.config({
     cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
     api_key:process.env.CLOUDINARY_CLIENT_KEY,
     api_secret:process.env.CLOUDINARY_CLIENT_SECRET
})


export const instance = new Razorpay({
     key_id:process.env.RAZORPAY_API_KEY,
     key_secret:process.env.RAZORPAY_API_SECRET,
   });

database();


NodeCron.schedule('0 0 0 1 * *',async()=>{
   try {
     await Stats.create({})
   } catch (error) {
      console.log(error)
   }    
})

app.listen(process.env.PORT,()=>{
     console.log("server running at 4ooo")
})
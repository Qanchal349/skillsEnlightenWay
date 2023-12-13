import jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsynError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";



// for cookie-token 
export const isAuthenticated = catchAsyncError(async(req,res,next)=>{
    
    const {token} = req.cookies;
      if(!token) return next(new ErrorHandler("Please login to access this resourses",401))
   const decode = jwt.verify(token,process.env.JWT_SECRET_TOKEN)
   req.user = await User.findById(decode._id)
   next();

})



// for admin 
export const authorizeAdmin = (req,res,next)=>{
   if(req.user.role!=='admin')
     return next(new ErrorHandler(`${req.user.role} is not allowed to access this resources`,403))
     next();   
}


//  for subscription 
export const authorizeSubscription = (req,res,next)=>{
  if(req.user.subscription.status!=='active' && req.user.role!=='admin')  
  return next(new ErrorHandler("Subscribe to access this course",403))
  next();
}




import { catchAsyncError } from "../middleware/catchAsynError.js";
import  ErrorHandler from "../utils/errorHandler.js"
import {User} from "../models/User.js"
import sendToken from "../utils/sendToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from 'crypto';
import {Course} from '../models/Course.js'
import cloudinary from 'cloudinary'
import getDataUri from "../utils/dataUri.js";
import {Stats} from "../models/Stats.js"


export const register = catchAsyncError(async(req,res,next)=>{
  
const {name,email,password} = req.body;
const file = req.file;
    if(!name || !email || !password || !file)
       return next(new ErrorHandler("Please Fill required field",400))

    let user = await User.findOne({email})
    if(user)
       return next(new ErrorHandler("User Already Exist",409))
   
    const fileUri =  getDataUri(file)
    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content)
    user = await User.create({name,email,password,avatar:{public_id:mycloud.public_id,url:mycloud.secure_url}})
    sendToken(res,user,"account created successfully ",201); 
})

// login 

export const login = catchAsyncError(async(req,res,next)=>{
  const {email,password} = req.body;
 
        if(!email || !password) 
        return next(new ErrorHandler("Please enter required field",400))
        
        const user = await User.findOne({email}).select('+password');
        
        if(!user)
        return next(new ErrorHandler("user doesn't exist ",401))

        const isMatched = await user.comparePassword(password);
        if(!isMatched)
            return next(new ErrorHandler("Please Enter valid email or password"))  
        
        sendToken(res,user,`welcome back , ${user.name}`,200)  

})


// logout 

export const logout = catchAsyncError(async(req,res,next)=>{
    
    res.status(200).cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
        secure:true,
        // sameSite:'none'
    }).json({
        success:true,
        message:"logout successfully"
    })

})


// get my profile 
export const profile = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success:true,
        user 
    })
    
})


// change password 

export const changePassword = catchAsyncError(async(req,res,next)=>{
    
 const {oldPassword,newPassword} = req.body ;
 if(!oldPassword || !newPassword)
       return next(new ErrorHandler("Please Fill required field",400))
 const user = await User.findById(req.user._id).select('+password');
 const isMatch = await user.comparePassword(oldPassword);
 if(!isMatch)
  return next(new ErrorHandler("Incorrect old password",401));

  user.password = newPassword; 
  await user.save() 
  
  res.status(200).json({
    success:true, 
    message:"password changed successfully"
  })


})


// change profile 
export const updateProfile = catchAsyncError(async(req,res,next)=>{
   const {email,name} = req.body 
   const user = await User.findById(req.user.id) ;
   if(email)
   user.email = email;
   if(name)
   user.name=name;

   await user.save();

   res.status(200).json({
    success:true,
    message:"Profile updated successfully"
   })
    
})



// update profile image
export const updateprofilepicture = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user.id) 
    const file = req.file;
    const fileUri =  getDataUri(file)
    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content)   
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    user.avatar={
         public_id:mycloud.public_id,
         url:mycloud.secure_url 
    }
    await user.save();
     res.status(200).json({
        success:true,

    })

})


// forgot password 

export const forgotPassword = catchAsyncError(async(req,res,next)=>{
  const {email} = req.body;   
  const user = await User.findOne({email})
  
   if(!user)
   return next(new ErrorHandler("User not found",400))
   const resetToken = await user.getResetToken();
   await user.save();
   const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`//http://localhost:3000/resetpassword/token
   const message = `Click on the link to reset password . ${url}. If you have not requested then please ignore it.`
   // send email 
   await sendEmail(user.email,"CourseBundler Reset Password",message)
   
    res.status(200).json({
        success:true,
        message:`Reset Token has been sent to ${user.email}`
    })

})




// reset password 
export const resetPassword = catchAsyncError(async(req,res,next)=>{
    const {token} = req.params;
    const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex')
    const user = await User.findOne({resetPasswordToken,resetPasswordExpire:{$gt:Date.now()}}) 

    if(!user)
      return next(new ErrorHandler("Token is invalid or has been expired ,Try again",401))

   user.password = req.body.password;
   user.resetPasswordExpire=undefined;
   user.resetPasswordToken=undefined;
   await user.save(); 
   
   res.status(200).json({
    success:true,
    message:"password changed successfully"
   })
  

})


// add to playlist 
export const addtoplaylist = catchAsyncError(async(req,res,next)=>{
   const user = await User.findById(req.user._id) ;
   const course = await Course.findById(req.body.id) 
   if(!course) 
     return next(new ErrorHandler('Invalid course id',404)) 
    
   const isExist = user.playlist.find((item)=> item.course.toString()===req.body.id)  
   if(isExist) 
      return next(new ErrorHandler("Course Already Exist",409))  
   
   user.playlist.push({
      course:course._id,
      poster:course.poster.url 
   }) 
   
     await user.save() 
        res.status(200).json({
            success:true,
            message:"Course added to playlist "
        })
})


// remove from playlist
export const removeFromPlaylist = catchAsyncError(async(req,res,next)=>{
     
   const user = await User.findById(req.user._id) ;
   const course = await Course.findById(req.query.id) 
   if(!course) 
     return next(new ErrorHandler('Invalid course id',404)) 
    
   const newPlaylist = user.playlist.filter(item=>{
       if( item.course.toString()!==course._id.toString())
       return item;
   }) 
   user.playlist = newPlaylist;
   await user.save();
   
   await user.save() 
        res.status(200).json({
            success:true,
            message:"Course removed from  playlist "
     })

})




//  get all users 

export const getAllUsers = catchAsyncError(async(req,res,next)=>{
    const users = await User.find({});
    res.status(200).json({
        success:true,
        users 
    })
})

// update user role 
export const updateUserRole = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.id) 

    if(!user) 
    return next(new ErrorHandler("User not found",404))

    if(user.role==='user')  user.role='admin';
    else user.role = 'user'  
    await user.save() 
    res.status(200).json({
        success:true,
        message:"Role updated"
    })

})

// delete user 
export const deleteUser = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.id) 
    if(!user) 
    return next(new ErrorHandler("User not found",404))
   
    await cloudinary.v2.uploader.destroy(user.avatar.public_id) 
    await user.deleteOne();

    res.status(200).json({
        success:true,
        message:"user deleted successfully"
    })

})

// delete my profile 
export const deleteMyProfile = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user._id) 
    await cloudinary.v2.uploader.destroy(user.avatar.public_id) 
    await user.remove;
    
    re.status(200).cookie('token',null,{
        expires:new Date.now()
    }).json({
        success:true,
        message:"Profile deleted successfully"
    })

})



User.watch().on("change",async()=>{
   const stats = await Stats.find({}).sort({createdAt:"desc"}).limit(1);
   const subscription = await User.find({"subscriptions.status":'active'}) 
   
   stats[0].subscriptions = subscription.length;
   stats[0].users = await User.countDocuments();
   stats[0].createdAt = new Date(Date.now()) 
   
     await stats[0].save() ;
})









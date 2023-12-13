import mongoose  from "mongoose";
import validator from "validator";
import Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
import crypto from "crypto"


const schema = new mongoose.Schema({
  
       name:{
         type:String,
         required:[true,"Please Enter your name"]
       },
       
       email:{
        type:String,
        required:[true,"Please enter email"],
        unique:true,
        validate:[validator.isEmail,"Please enter correct email"]  
       },
      
       password:{
          type:String,
          required:[true,"Please enter password"],
          minLength:[8,"Password must be 8 character"],
          select:false
       },

       role:{
          type:String,
          enum:['admin','user'],
          default:'user'
       },
 
       subscription:{
          id:String,
          status:String
       },

       avatar :{
           public_id:{
             type:String,
             required:true
           },
           url:{
              type:String,
              required:true
           }
       },

       playlist:[
            {
                course:{
                     type:mongoose.Schema.Types.ObjectId,
                     ref:"Course"
                },
                poster:String
            }
       ],

       createdAt:{
           type:Date,
           default:Date.now
       },

       resetPasswordToken:String,
       resetPasswordExpire:String

})



schema.methods.getJWTToken = function(){
    return Jwt.sign({_id:this._id},process.env.JWT_SECRET_TOKEN,{
       expiresIn:"15d"
    })
}


schema.pre('save', async function(next){
    if(!this.isModified("password")) next();
    this.password = await bcrypt.hash(this.password,10);
    next()
})



schema.methods.comparePassword = async function(password){
   return await bcrypt.compare(password,this.password) ; 
}


schema.methods.getResetToken = function(){
   const resettoken =  crypto.randomBytes(20).toString('hex');
   this.resetPasswordToken = crypto.createHash('sha256').update(resettoken).digest('hex')
   this.resetPasswordExpire=Date.now()+15*60*1000;
   return resettoken;
}









export const User = mongoose.model("User",schema);
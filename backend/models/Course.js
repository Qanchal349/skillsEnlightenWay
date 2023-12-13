import mongoose from "mongoose";

const schema = new mongoose.Schema({

  title:{
     type:String,
     required:[true,"Please Enter course title"],
     minLength:[4,"Title must be atleast 4 char"],
     maxLength:[40,"Title must be atmost 40 char"]
  },

  
   description:{
    type:String,
     required:[true,"Please Enter course description"],
     minLength:[20,"Title must be atleast 4 char"],
   },

   lectures:[
        
      {
          title:{
             type:String,
             required:true
          },
          description:{
            type:String,
            required:true
          },
          video:{
             public_id:{
                 type:String,
                 required:true
             },

             url:{
               type:String,
               required:true  
             }
          }
      }
    
   ],

   poster:{
        public_id:{
            type:String,
            required:true
        },

        url:{
        type:String,
        required:true  
        }
    },

    views:{
         type:Number,
         default:0
    },
    numOfVideos:{
        type:Number,
        default:0
    },

    category:{
         type:String,
         required:true
    },

    createdBy:{
         type:String, 
         required:true
    },

    createdAt:{
         type:Date,
         default:Date.now
    }



})




export const Course = mongoose.model("Course",schema)
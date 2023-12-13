import {createReducer} from "@reduxjs/toolkit"

export const adminReducer = createReducer({},{

 
   // stats 
   getAdminStatsRequest:(state)=>{
      state.loding=true
   } ,
  
   getAdminStatsSuccess:(state,action)=>{
      state.loading=false
      state.stats = action.payload.stats;   
      state.viewsCount = action.payload.viewsCount;   
      state.subscriptionsCount = action.payload.subscriptionsCount;   
      state.usersCount = action.payload.usersCount;   
      state.subscriptionsPercentage = action.payload.subscriptionsPercentage;   
      state.viewsPercentage = action.payload.viewsPercentage;   
      state.usersPercentage = action.payload.usersPercentage;   
      state.usersProfit = action.payload.usersProfit;   
      state.subscriptionsProfit = action.payload.subscriptionsProfit;   
      state.viewsProfit = action.payload.viewsProfit;   
   },
 
   getAdminStatsFail:(state,action)=>{
      state.loading=false 
      state.error=action.payload 
   },


   // create course 
  createCourseRequest:(state)=>{
     state.loding=true
  } ,
 
  createCourseSuccess:(state,action)=>{
     state.loading=false
     state.message = action.payload 
  },

  createCourseFail:(state,action)=>{
     state.loading=false 
     state.error=action.payload 
  },


  // get all users 
   getAllUsersRequest:(state)=>{
      state.loding=true
   } ,

   getAllUsersSuccess:(state,action)=>{
      state.loading=false
      state.users = action.payload 
   },

   getAllUsersFail:(state,action)=>{
      state.loading=false 
      state.error=action.payload 
   },

   // delete user 

   deleteUserRequest:(state)=>{
      state.loding=true
   } ,

   deleteUserSuccess:(state,action)=>{
      state.loading=false
      state.message = action.payload 
   },

   deleteUserFail:(state,action)=>{
      state.loading=false 
      state.error=action.payload 
   },

   // update role 

   updateUserRoleRequest:(state)=>{
      state.loding=true
   } ,

   updateUserRoleSuccess:(state,action)=>{
      state.loading=false
      state.message = action.payload 
   },

   updateUserRoleFail:(state,action)=>{
      state.loading=false 
      state.error=action.payload 
   },


  // delete course 

   deleteCourseRequest:(state)=>{
     state.loding=true
   } ,

    deleteCourseSuccess:(state,action)=>{
      state.loading=false
      state.message = action.payload 
   },

    deleteCourseFail:(state,action)=>{
      state.loading=false 
      state.error=action.payload 
   },

   //  add lectures 

   addLectureCourseRequest:(state)=>{
      state.loding=true
    } ,
 
   addLectureCourseSuccess:(state,action)=>{
       state.loading=false
       state.message = action.payload 
    },
 
   addLectureCourseFail:(state,action)=>{
       state.loading=false 
       state.error=action.payload 
    },

   // delete lecture 
    deleteLectureCourseRequest:(state)=>{
      state.loding=true
    } ,
 
    deleteLectureCourseSuccess:(state,action)=>{
       state.loading=false
       state.message = action.payload 
    },
 
    deleteLectureCourseFail:(state,action)=>{
       state.loading=false 
       state.error=action.payload 
    },

   clearError:(state)=>{
      state.error=null
   },

   clearMessage:(state)=>{
     state.message=null 
  }


})

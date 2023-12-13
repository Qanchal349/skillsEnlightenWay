import { createReducer } from "@reduxjs/toolkit";


export const userReducer = createReducer({},{

     // action type 
     // login 
     loginRequest:(state)=>{
        state.loading=true;

     },
     loginSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true 
        state.user = action.payload.user 
        state.message = action.payload.message

     },

     loginFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false  
        state.error = action.payload 
     },

       // register
       registerRequest:(state)=>{
        state.loading=true;

       },
       registerSuccess:(state,action)=>{
         state.loading=false;
         state.isAuthenticated=true 
         state.user = action.payload.user 
         state.message = action.payload.message

       },

       registerFail:(state,action)=>{
         state.loading=false;
         state.isAuthenticated=false  
         state.error = action.payload 
      },


    // load user 
     loadUserRequest:(state,action)=>{
       state.loading=true;
     },
     loadUserSuccess:(state,action)=>{
       state.loading=false;
       state.isAuthenticated=true;
       state.user = action.payload.user;
       state.message = action.payload.message 
     },

     loadUserFail:(state,action)=>{
         state.loading=false;
         state.isAuthenticated=false;
         state.error=action.payload 
     },

     // logout user 
     logoutRequest:(state,action)=>{
       state.loading=true;
     },

     logoutSuccessfull:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.user = null;
        state.message = action.payload
     },

     logoutFail:(state,action)=>{
         state.loading=false;
         state.isAuthenticated=true;
         state.error=action.error; 
     },

    clearError:(state)=>{
       state.error=null       
    },
    clearMessage:(state)=>{
        state.message = null   
    } 

     

})



// profile reducer 
export const profileReducer = createReducer({},{
   
  // change profile 
   updateProfileRequest:(state,action)=>{
      state.loading = true;
   },

   updateProfileSuccess:(state,action)=>{
       state.loading = false;
       state.message = action.payload.message 
   },
   updateProfileFail:(state,action)=>{
       state.loading = false;  
       state.error = action.payload.error 
   },
   
   // change password 
   changePasswordRequest:(state,action)=>{
         state.loading=true;
   },

   changePasswordSuccess:(state,action)=>{
        state.loading=false ;
        state.message = action.payload.message;
   },

   changePasswordFail:(state,action)=>{
       state.loading = false;
       state.error = action.payload 
   },
   
     // forgot password 

      forgotPasswordRequest:(state,action)=>{
        state.loading=true;
      },

      forgotPasswordSuccess:(state,action)=>{
          state.loading=false ;
          state.message = action.payload.message;
      },

      forgotPasswordFail:(state,action)=>{
          state.loading = false;
          state.error = action.payload 
      },


      // reset password 

      resetPasswordRequest:(state,action)=>{
        state.loading=true;
      },

      resetPasswordSuccess:(state,action)=>{
          state.loading=false ;
          state.message = action.payload.message;
      },

      resetPasswordFail:(state,action)=>{
          state.loading = false;
          state.error = action.payload 
      },


      // remove from playlist 

      removeFromPlaylistRequest:(state,action)=>{
        state.loading=true;
      },

      removeFromPlaylistSuccess:(state,action)=>{
          state.loading=false ;
          state.message = action.payload.message;
      },

      removeFromPlaylistFail:(state,action)=>{
          state.loading = false;
          state.error = action.payload 
      },

    
      // change profile image 

      updateProfilePictureRequest:(state,action)=>{
          state.loading = true;
      },

      updateProfilePictureSuccess:(state,action)=>{
          state.loading = false;
          state.message = action.payload.message 
      },
      updateProfilePictureFail:(state,action)=>{
          state.loading = false;  
          state.error = action.payload.error 
      },

    clearError:(state)=>{
         state.error=null       
    },
    clearMessage:(state)=>{
        state.message = null   
    } 
    
})



// subscription reducer 
export const subscriptionReducer = createReducer({},{
    
  buySubscriptionRequest:(state)=>{
       state.loading=true 
  },

  buySubscriptionSuccess:(state,action)=>{
      state.loading=false;
      state.subscriptionId = action.payload  
  },

  buySubscriptionFail:(state,action)=>{
      state.loading=false 
      state.error = action.payload  
  },
   

  // cancel subscription
  cancelSubscriptionRequest:(state)=>{
    state.loading=true 
  },

  cancelSubscriptionSuccess:(state,action)=>{
    state.loading=false;
    state.message = action.payload  
  },

  cancelSubscriptionFail:(state,action)=>{
    state.loading=false 
    state.error = action.payload  
  },

  clearError:(state)=>{
    state.error=null       
  },

  clearMessage:(state)=>{
    state.message = null   
  } 


})
import {createReducer} from '@reduxjs/toolkit'


export const otherReducer = createReducer({},{
    contactRequest:(state,action)=>{
        state.loading=true  
    } ,
    
    contactSuccess:(state,action)=>{
        state.loading = false 
        state.message = action.payload   
    },

    contactFail:(state,action)=>{
       state.loading = false 
       state.error = action.payload    
    },

     // course request 
     courseRequestRequest:(state,action)=>{
        state.loading=true  
    } ,
    
    courseRequestSuccess:(state,action)=>{
        state.loading = false 
        state.message = action.payload   
    },

    courseRequestFail:(state,action)=>{
       state.loading = false 
       state.error = action.payload    
    },

    clearError:(state)=>{
         state.error=null
    },

    clearMessage:(state)=>{
         state.message=null 
    }

})

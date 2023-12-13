import { createReducer } from "@reduxjs/toolkit";

export const courseReducer = createReducer({courses:[],lectures:[]},{
    // all courses   
    allCoursesRequest:(state,action)=>{
        state.loading=true;
        
    },

    allCoursesSuccess:(state,action)=>{
          state.loading=false
          state.courses=action.payload 
    },

    allCoursesFail:(state,action)=>{
          state.loading=false;
          state.error=action.payload  
    },

    // get course 

    getCourseRequest:(state,action)=>{
       state.loading=true;   

    },

    getCourseSuccess:(state,action)=>{
       state.loading=false;
       state.lectures=action.payload   

    },

    getCourseFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload  
        
    },

    // add to playlist 
    addToPlalistRequest:(state,action)=>{
        state.loading=true;
        
    },

    addToPlaylistSuccess:(state,action)=>{
          state.loading=false
          state.message=action.payload.message 
    },

    addToPlaylistFail:(state,action)=>{
          state.loading=false;
          state.error=action.payload  
    },

    clearError:(state,action)=>{
        state.error = null
    },

    clearMessage:(state,action)=>{
        state.message=null 
    }
})
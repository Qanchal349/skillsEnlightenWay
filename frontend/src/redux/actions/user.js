import axios from 'axios'


export const login = (email,password) => async(dispatch)=>{
    
    try {

         dispatch({type:"loginRequest"})
         const {data} = await axios.post(`/api/v1/login`,{email,password},{
              headers:{
                 'Content-Type':'application/json'
              }
         })
         
         dispatch({type:'loginSuccess',payload:data})

    } catch (error) { 
       dispatch({type:'loginFail',payload:error.response.data.message})   
    }

}


export const getMyProfile = () => async(dispatch)=>{
         try {
            dispatch({type:'loadUserRequest'})
            const {data} = await axios.get(`/api/v1/me`);
            dispatch({type:'loadUserSuccess',payload:data})

         } catch (error) {
             dispatch({type:'loadUserFail',payload:error.response.data.message})
         }
}



export const logout =  () => async(dispatch)=>{
   try {
       dispatch({type:'logoutRequest'})
       const {data} = await axios.get(`/api/v1/logout`) 
       dispatch({type:'logoutSuccess',payload:data});

   } catch (error) {
       dispatch({type:'logoutFail',payload:error.response.data.message}) 
   } 

}

// register 
export const register = (formData) =>async(dispatch)=>{
    try {
      dispatch({type:'registerRequest'}) 
      const {data} = await axios.post(`/api/v1/register`,formData,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
      })

      dispatch({type:'registerSuccess',payload:data})

    } catch (error) {
       dispatch({type:'registerFail',payload:error.response.data.message}) 
    }
}



// buy subscription 
export const buySubscription = () =>async(dispatch)=>{
     
    try {
        dispatch({type:'buySubscriptionRequest'})
        
        const {data} = await axios.get(`/api/v1/subscription`) 
        console.log("hello")
        dispatch({type:'buySubscriptionSuccess',payload:data.subscriptionId})

    } catch (error) {
        console.log(error.response.data)
        dispatch({type:'buySubscriptionFail',payload:error.response.data.message})
    }
}


// cancel subscription 

export const cancelSubscription = () =>async(dispatch)=>{
     
    try {
        dispatch({type:'cancelSubscriptionSuccess'})
        const {data} = await axios.delete(`api/v1/subscribe/cancel`) 
        dispatch({type:'cancelSubscriptionSuccess',payload:data.message})

    } catch (error) {
        dispatch({type:'cancelSubscriptionFail',payload:error.response.data.message})
    }
}
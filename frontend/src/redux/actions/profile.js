import axios from 'axios' 

export const updateProfile=(name,email)=> async(dispatch)=>{
      
     try {
         dispatch({type:'updateProfileRequest'})

         const {data} = await axios.put(`/api/v1/updateprofile`,{name,email}, {
              headers:{
                 'Content-Type':'application/json'
              }
         })
 
         dispatch({type:'updateProfileSuccess',payload:data}) 
     } catch (error) {
         dispatch({type:'updateProfileFail',payload:error.response.data.message})
     }

}



export const changePassword = (oldPassword,newPassword) => async(dispatch) =>{
     
     try {
         dispatch({type:'changePasswordRequest'})
         const {data} = await axios.put(`api/v1/changepassword`,{oldPassword,newPassword},{
             headers:{
                 'Content-Type':'application/json'
             }
         })
        
         dispatch({type:'changePasswordSuccess',payload:data})

     } catch (error) {
         dispatch({type:'changePasswordFail',payload:error.response.data.message})
     }

} 




export const updateProfilePicture=(formData)=> async(dispatch)=>{
      
    try {
        dispatch({type:'updateProfilePictureRequest'})

        const {data} = await axios.put(`/api/v1/updateprofilepicture`,formData, {
             headers:{
                'Content-Type':'multipart/form-data'
             }
        })

        dispatch({type:'updateProfilePictureSuccess',payload:data}) 
    } catch (error) {
        dispatch({type:'updateProfilePictureFail',payload:error.response.data.message})
    }

}


//  forgot password 
export const forgotPassword = (email) => async(dispatch) =>{
     
    try {
        dispatch({type:'forgotPasswordRequest'})
        const {data} = await axios.post(`api/v1/forgotpassword`,{email},{
            headers:{
                'Content-Type':'application/json'
            }
        })
       
        dispatch({type:'forgotPasswordSuccess',payload:data})

    } catch (error) {
        dispatch({type:'forgotPasswordFail',payload:error.response.data.message})
    }

} 


// reset password 

export const resetPassword = (token,password) => async(dispatch) =>{
     
    try {
        dispatch({type:'resetPasswordRequest'})
        console.log(`api/v1/resetpassword/${token}`)
        const {data} = await axios.put(`/api/v1/resetpassword/${token}`,{password},{
            headers:{
                'Content-Type':'application/json'
            }
        })
        
        console.log(data)

        dispatch({type:'resetPasswordSuccess',payload:data})

    } catch (error) {
        
        console.log(error)

        dispatch({type:'resetPasswordFail',payload:error.response.data.message})
    }

} 

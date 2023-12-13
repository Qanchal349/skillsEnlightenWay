import axios from "axios";


// contact us 
export const contactUs =(name,email,message) => async(dispatch)=>{
    try {
      console.log(name,email,message)

      const config = {
          headers:{
              'Content-Type':'application/json'
          }
       } 

      dispatch({type:"contactRequest"})
      const {data} = await axios.post(`/api/v1/contact`,{name,email,message},config)   
      dispatch({type:'contactSuccess',payload:data.message})
      

    } catch (error) {
       dispatch({type:'contactFail',payload:error.response.data.message})
    } 
  } 


  // course request 
  export const courseRequest =(name,email,course) => async(dispatch)=>{
    try {

      const config = {
          headers:{
              'Content-Type':'application/json'
          }
      } 

      dispatch({type:"courseRequestRequest"})
      const {data} = await axios.post(`/api/v1/courserequest`,{name,email,course},config)   
      dispatch({type:'courseRequestSuccess',payload:data.message})
  
    } catch (error) {
       dispatch({type:'courseRequestFail',payload:error.response.data.message})
    } 
  }
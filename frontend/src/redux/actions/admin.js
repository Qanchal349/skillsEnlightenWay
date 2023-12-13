import axios from "axios";


export const createCourse =(formData) => async(dispatch)=>{
      try {
         
        dispatch({type:"createCourseRequest"})
        const config = {
             headers:{
                 'Content-Type':'multipart/form-data'
             }
        }
        const {data} = await axios.post(`/api/v1/course`,formData,config) 
        dispatch({type:'createCourseSuccess',payload:data.message})

      } catch (error) {
         dispatch({type:'createCourseFail',payload:error.response.data.message})
      } 
}


// delete course 
export const deleteCourse =(id) => async(dispatch)=>{
  try {
     
    dispatch({type:"deleteCourseRequest"})
   
    const {data} = await axios.delete(`/api/v1/course/${id}`)   
    dispatch({type:'deleteCourseSuccess',payload:data.message})

  } catch (error) {
     dispatch({type:'deleteCourseFail',payload:error.response.data.message})
  } 
}



// add Lectures 
export const addLecture =(courseId,formData) => async(dispatch)=>{
  try {
     
    dispatch({type:"addLectureCourseRequest"})
    const config = {
      headers:{
          'Content-Type':'multipart/form-data'
      }
    }
    const {data} = await axios.post(`/api/v1/course/${courseId}`,formData,config)   
    dispatch({type:'addLectureCourseSuccess',payload:data.message})

  } catch (error) {
     dispatch({type:'addLectureCourseFail',payload:error.response.data.message})
  } 
}



// delete Lectures 
export const deleteLecture =(courseId,lectureId) => async(dispatch)=>{
  try {
     
    dispatch({type:"deleteLectureCourseRequest"})
    const {data} = await axios.delete(`/api/v1/lecture?courseId=${courseId}&lectureId=${lectureId}`)   
    dispatch({type:'deleteLectureCourseSuccess',payload:data.message})

  } catch (error) {
     dispatch({type:'deleteLectureCourseFail',payload:error.response.data.message})
  } 
} 


// get all users 
export const getAllAdminUser =() => async(dispatch)=>{
  try {
     
    dispatch({type:"getAllUsersRequest"})
    const {data} = await axios.get(`/api/v1/admin/users`)   
    dispatch({type:'getAllUsersSuccess',payload:data.users})

  } catch (error) {
     dispatch({type:'getAllUsersFail',payload:error.response.data.message})
  } 
} 

// delete user 

export const deleteUser =(id) => async(dispatch)=>{
  try {
     
    dispatch({type:"deleteUserRequest"})
    const {data} = await axios.delete(`/api/v1/admin/user/${id}`)   
    dispatch({type:'deleteUserSuccess',payload:data.message})

  } catch (error) {
     dispatch({type:'deleteUserFail',payload:error.response.data.message})
  } 
} 

// update user role 
export const updateUserRole =(id,formData) => async(dispatch)=>{
  try {
     
    const config = {
      headers:{
          'Content-Type':'application/json'
      }
    }
    dispatch({type:"updateUserRoleRequest"})
    const {data} = await axios.put(`/api/v1/admin/user/${id}`,{},config)   
    dispatch({type:'updateUserRoleSuccess',payload:data.message})

  } catch (error) {
     dispatch({type:'updateUserRoleFail',payload:error.response.data.message})
  } 
} 



// get Dashboard stats
export const getDashboardStats =() => async(dispatch)=>{
  try {

    dispatch({type:"getAdminStatsRequest"})
    const {data} = await axios.get(`/api/v1/admin/stats`)   
    dispatch({type:'getAdminStatsSuccess',payload:data})

  } catch (error) {
     dispatch({type:'getAdminStatsFail',payload:error.response.data.message})
  } 
} 




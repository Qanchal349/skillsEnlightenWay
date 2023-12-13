import axios from 'axios'


export const getAllCourses=(category='',keyword='')=> async(dispatch)=>{
      
  try {
    console.log(category)
    dispatch({type:"allCoursesRequest"}) 
    const {data} = await axios.get(`/api/v1/courses?keyword=${keyword}&category=${category}`)  
    dispatch({type:'allCoursesSuccess',payload:data.courses})
  
    
  } catch (error) {
     dispatch({type:'allCoursesFail',payload:error.response.data.message})
  }

}


// get course and lectures 
export const getCourseLectures=(id)=> async(dispatch)=>{
      
   try {
     
     dispatch({type:"getCourseRequest"}) 
     const {data} = await axios.get(`/api/v1/course/${id}`)  
     dispatch({type:'getCourseSuccess',payload:data.lectures})
    
     
   } catch (error) {
      dispatch({type:'getCourseFail',payload:error.response.data.message})
   }
 
 }


//  add to playlist 
export const addToPlaylist = (id) => async(dispatch) =>{
    try {
        
       dispatch({type:'addToPlaylistRequest'})   
       const {data} = await axios.post(`api/v1/addtoplaylist`,{id},{
          headers:{
             'Content-Type':'application/json'
          }
       })
       dispatch({type:'addToPlaylistSuccess',payload:data})


    } catch (error) {
        dispatch({type:'addToPlaylistFail',payload:error.response.data.message}) 
    }   

}


// remove from playlist 

export const removeFromPlaylist = (id) => async(dispatch) =>{
    try {
        
       dispatch({type:'removeFromPlaylistRequest'})   
       const {data} = await axios.delete(`api/v1/removefromplaylist?id=${id}`,{
          headers:{
             'Content-Type':'application/json'
          }
       })
       dispatch({type:'removeFromPlaylistSuccess',payload:data})


    } catch (error) {
        dispatch({type:'removeFromPlaylistFail',payload:error.response.data.message}) 
    }   

}
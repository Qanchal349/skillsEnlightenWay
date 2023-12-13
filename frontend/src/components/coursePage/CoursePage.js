import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Navigate, useParams} from 'react-router-dom'
import {getCourseLectures} from '../../redux/actions/course'
import Loader from '../layout/loader/Loader'

const CoursePage = ({user}) => {
   
 const [lectureNumber, setLectureNumber] = useState(0)
 const dispatch = useDispatch()
 const params = useParams();
 const {lectures,loading}  = useSelector(state=>state.courses);

   useEffect(() => {
      dispatch(getCourseLectures(params.id)) 

    
   }, [dispatch,params.id])
 

 if(user.role!=='admin' && (user.subscription===undefined || user.subscription.status!=='active')){
       return <Navigate to="/subscribe"/> 
 } 

  return (

         loading ? (<Loader/>) : <>
              
              
                <Grid  minH={'150vh'} templateColumns={['1fr','3fr 1fr']} >
                  
                    {
                        lectures && lectures.length > 0 ? (<>
                                    <Box>
                            <video src={lectures[lectureNumber].video.url} 
                                autoPlay
                                controls controlsList='nodownload noremoteplayback'
                                disablePictureInPicture
                                disableRemotePlayback
                                width={'100%'}
                                >
                                </video>
       
                            <Heading m={4} size={'md'} children={`#${lectureNumber+1} ${lectures[lectureNumber].title} `}/>
                            <Heading m={4} children="Description"/>
                            <Text  m={4} children={`${lectures[lectureNumber].description}`}/>
                
                            </Box>
                
                            <VStack style={{marginTop:"10px"}}>
                                {
                                    lectures.map((item,index)=>(
                                    <button onClick={()=> setLectureNumber(index)} style={{width:"90%" ,padding:"1rem", fontWeight:"bold", textAlign:"justify",margin:"0",borderBottom:"1px solid rgba(0,0,0,0.2)"}}>
                                        <Text noOfLines={1} children={`#${index+1} ${item.title}`}/>
                                    </button>
                                    ))
                                }
                
                            </VStack>
                        </>) : <>
                            <Heading style={{margin:"auto"}}> NO LECTURES FOUND</Heading>
                        </>
                    }
                  
       
                </Grid>
              

    </>
     
  )
}

export default CoursePage
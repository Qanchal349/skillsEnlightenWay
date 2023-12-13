import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'
import { useDispatch, useSelector } from 'react-redux'
import {getAllCourses, getCourseLectures} from "../../../../redux/actions/course"
import toast from 'react-hot-toast'
import { addLecture, deleteCourse, deleteLecture } from '../../../../redux/actions/admin'



const AdminCouses = () => {

 const {courses,lectures} = useSelector(state=>state.courses)
 const {loading,error,message} = useSelector(state=>state.admin)

 const [courseId, setCourseId] = useState()
 const [title, setTitle] = useState()

 const {isOpen,onClose,onOpen} = useDisclosure() 
 const dispatch = useDispatch()


 const courseDetailsHandler =(courseId,title)=>{
     dispatch(getCourseLectures(courseId))
     onOpen()
     setCourseId(courseId)
     setTitle(title)
 }

 const deleteButtonHandler=(courseId)=>{
     dispatch(deleteCourse(courseId))
 }

 const addLectureHandler=async(e,courseId,title,description,video)=>{
       e.preventDefault();
       const formData = new FormData()
       formData.append('title',title)
       formData.append('description',description)
       formData.append('file',video)
      await dispatch(addLecture(courseId,formData));
      dispatch(getCourseLectures(courseId))
 }

 const deleteLectureButtonHandler = async(courseId,lectureId)=>{
      await dispatch(deleteLecture(courseId,lectureId))
      dispatch(getCourseLectures(courseId))  
 }



  useEffect(() => {
    dispatch(getAllCourses())
    
    if(error){
      toast.error(error)
      dispatch({type:'clearError'})
    }

    if(message){
      toast.success(message)
      dispatch({type:'clearMessage'})
    }
    
    dispatch(getAllCourses())

  }, [dispatch,error,message])
  



  return (
      <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
            
             <Box p={[0,8]} overflowX={'auto'}>
                  <Heading textTransform={'uppercase'}
                    my={16} textAlign={['center','left']}
                    size={'md'}
                    children='All Users'/>
                  <TableContainer w={['100vw','full']}>
                       <Table variant={'simple'} size={'lg'}>
                           <TableCaption>All available courses in the database</TableCaption>
                           <Thead>
                               <Tr>
                                  <Th>Id</Th>
                                  <Th>Poster</Th>
                                  <Th>Title</Th>
                                  <Th>Category</Th>
                                  <Th>Creator</Th>
                                  <Th isNumeric>Views</Th>
                                  <Th isNumeric>Lecture</Th>
                                  <Th isNumeric>Actions</Th>
                               </Tr>
                           </Thead>
                           <Tbody>
                              {courses.map((item,index)=>(
                                 <Row key={index} item={item} deleteButtonHandler={deleteButtonHandler} courseDetailsHandler={courseDetailsHandler} loading={loading} />
                              ))}
                           </Tbody>
                       </Table>
                  </TableContainer>

                <CourseModal id={courseId} courseTitle={title} isOpen={isOpen} onClose={onClose} 
                deleteButtonHandler={deleteLectureButtonHandler} 
                addLectureHandler={addLectureHandler}
                lectures={lectures}
                loading={loading}
                 />

             </Box>
           <Sidebar/>

      </Grid>
  )
}


function Row({item,courseDetailsHandler,deleteButtonHandler,loading}){
    return (
       <Tr>
          <Td>#{item._id}</Td>
          <Td>
            <Image src={item.poster.url}/>
          </Td>
          <Td>{item.title}</Td>
          <Td textTransform={'uppercase'}>{item.category}</Td>
          <Td>{item.createdBy}</Td>
          <Td isNumeric>{item.views}</Td>
          <Td isNumeric>{item.numOfVideos}</Td>


          <Td isNumeric>
             <HStack justifyContent={'flex-end'}>
                <Button variant={'outline'} color={'teal'} onClick={()=>courseDetailsHandler(item._id,item.title)}  isLoading={loading} > View Lecture </Button>
                <Button  isLoading={loading} onClick={()=>deleteButtonHandler(item._id)}><RiDeleteBin7Fill/></Button>
             </HStack>
          </Td>
       </Tr>
    )
}

export default AdminCouses
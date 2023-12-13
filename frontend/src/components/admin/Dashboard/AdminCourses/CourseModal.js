import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {RiDeleteBin6Fill } from 'react-icons/ri'
import { fileUploadCss } from '../../../auth/Register'
import { useSelector } from 'react-redux'



const CourseModal = ({isOpen,onClose,id,deleteButtonHandler,addLectureHandler, courseTitle,lectures=[]}) => {
  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [video, setVideo] = useState("")
  const [videoPrev, setVideoPrev] = useState("")

  const {loading} = useSelector(state=>state.admin) 

  const changeVideoHandler = (e)=>{
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file) 
    reader.onloadend=()=>{
        setVideoPrev(reader.result) 
        setVideo(file) 
    }
  }
  
  const handleClose =()=>{
     setTitle("")
     setDescription("")
     setVideo("")
     setVideoPrev("")
     onClose()
  }

  return (
       <Modal isOpen={isOpen} size={'full'} onClose={handleClose} scrollBehavior='inside' >
               <ModalContent>
                  <ModalHeader>{courseTitle}</ModalHeader>
                  <ModalCloseButton/>
                  <ModalBody p={16}>
                    <Grid templateColumns={['1fr','3fr 1fr']}>
                         <Box px={['0','16']}>
                            <Box my={5}>
                                 <Heading size={'md'}>
                                     {courseTitle}
                                 </Heading>
                                 <Heading children={`#${id}`} size={'xm'} opacity={0.4}/>
                            </Box>
                            <Heading children={"Lectures"} size={'lg'} />


                              {/* map */}

                            {
                               lectures.map((item,i)=>(
                                    <VideoCard
                                      key={i}
                                      title={item.title}
                                      description={item.description}
                                      num={i+1}
                                      lectureId={item._id}
                                      courseId={id}
                                      deleteButtonHandler={deleteButtonHandler}
                                      loading={loading}
                                  />
                               ))
                            }

                            

                         </Box>

                          <Box>
                            <form onSubmit={(e)=>addLectureHandler(e,id,title,description,video)}>
                                    <VStack spacing={4}>
                                    <Heading children="Add Lecture" size={'md'}/>

                                     <Input focusBorderColor='teal'
                                      placeholder='Title'
                                      value={title}
                                      onChange={(e)=>setTitle(e.target.value)}/>

                                      <Input focusBorderColor='teal'
                                      placeholder='Description'
                                      value={description}
                                      onChange={(e)=>setDescription(e.target.value)}/>

                                        <Input required 
                                            type='file'
                                            accept='video/mp4'
                                            focusBorderColor='teal'
                                            css={{'&::file-selector-button':{ ...fileUploadCss }}}
                                            onChange={changeVideoHandler}

                                        />

                                    {videoPrev && (
                                         <video  controlsList='nodownload' controls src={videoPrev} />
                                    )} 

                                    <Button isLoading={loading} type='submit' w={'full'} colorScheme='teal' >Upload</Button>    

                                   </VStack>
                            </form>
                          </Box>

                    </Grid>
                  </ModalBody>
                  <ModalFooter>
                     <Button onClick={handleClose}>Close</Button>
                  </ModalFooter>
               </ModalContent>
     </Modal>
  )
}

export default CourseModal


function VideoCard({title,description,num,lectureId,courseId,deleteButtonHandler}){
     return (
         <Stack  p={[3,5]} justifyContent={['flex-start','space-between']} direction={['column','row']}my={8} borderRadius={'lg'} boxShadow={'0 0 10px teal'}>
              <Box>
                <Heading size={'sm'} children={`#${num} ${title}`}/>
                  <Text children={description}/>
              </Box>
              <Button color={'red.400'} onClick={()=>deleteButtonHandler(courseId,lectureId)} ><RiDeleteBin6Fill/></Button>
         </Stack>
     )
}
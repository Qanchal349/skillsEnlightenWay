import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from '../../Sidebar'
import { useState } from 'react'
import { fileUploadCss } from '../../../auth/Register'
import { useDispatch, useSelector } from 'react-redux'
import { createCourse } from '../../../../redux/actions/admin'
import toast from 'react-hot-toast'


const CreateCourse = () => {

  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [createdBy, setCreatedBy] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [imagePrev, setImagePrev] = useState("")

  const categories =['Web Development', 'Android Development' ,"Artificial Intelligence ","Data Structue And Algorithm" ,"Data Science"]
  const dispatch = useDispatch() 

  const {loading,error,message} = useSelector(state=>state.admin)

  const profileHandler = (e)=>{

    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file) 
    reader.onloadend=()=>{
        setImagePrev(reader.result) 
        setImage(file) 
    }

  }

 
  const submitHandler =(e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title',title)
    myForm.append('description',description)
    myForm.append('createdBy',createdBy)
    myForm.append('category',category)
    myForm.append('file',image)
    dispatch(createCourse(myForm))
  }


  useEffect(() => {
     if(error){
       toast.error(error) 
       dispatch({type:'clearError'})
     }

     if(message){
        toast.success(message)
        dispatch({type:'clearMessage'})
     }


  }, [dispatch,error,message])
  


  return (
      <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
              <Container py={16}>
                   <form onSubmit={submitHandler}>

                      <Heading size={'md'} textAlign={['center','left']} textTransform={'uppercase'}>Create Course</Heading>
                      <VStack m={'auto'} spacing={5} mt={4} >
                          <Input required id='title'
                           value={title} onChange={(e)=>setTitle(e.target.value)} 
                           placeholder='Title'
                           type='text'
                           focusBorderColor='teal'
                           />

                          <Input required id='description'
                           value={description} onChange={(e)=>setDescription(e.target.value)} 
                           placeholder='Description'
                           type='text'
                           focusBorderColor='teal'
                           />

                          <Input required id='createdby'
                           value={createdBy} onChange={(e)=>setCreatedBy(e.target.value)} 
                           placeholder='CreatedBy'
                           type='text'
                           focusBorderColor='teal'
                           />
                          
                          <Select  
                            focusBorderColor='teal' value={category}
                            onChange={e=>setCategory(e.target.value)}
                            >
                                
                                {categories.map((category,index)=>(
                                  <option value={category} key={index}>{category}</option>  
                                ))}
                          </Select>

                          <Input required id='chooseAvatar'
                            type='file'
                            accept='image/*'
                            focusBorderColor='teal'
                            css={{'&::file-selector-button':{ ...fileUploadCss }}}
                            onChange={profileHandler}

                          />

                            {imagePrev && (
                              <Image src={imagePrev} boxSize={64} objectFit={'contain'} />
                            )}          

                         <Button  isLoading={loading} color={'white'} bg={'teal'} type='submit' w='full'>Create</Button>

                      </VStack>

                   </form>
              </Container>
              <Sidebar/>
      </Grid>
  )
}

export default CreateCourse
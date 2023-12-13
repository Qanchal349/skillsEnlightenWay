import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { courseRequest } from '../../redux/actions/other'
import toast from 'react-hot-toast'

const Request = () => {


const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [course, setCourse] = useState("") 
const dispatch = useDispatch()
const {loading,error,message:otherMessage} = useSelector(state=>state.other)



const submitHandler = (e) =>{
   e.preventDefault() 
   dispatch(courseRequest(name,email,course))
}

   useEffect(() => {
   if(error){
      toast.error(error) 
      dispatch({type:'clearError'})
   }

   if(otherMessage){
      toast.success(otherMessage);
   }

   }, [error,otherMessage])


  return (
  
     <Container h={'90vh'}>
          <VStack h='full' justifyContent={'center'} spacing={16} >
             <Heading children="Request New Course"/>
               
                           <form onSubmit={submitHandler} style={{width:'100%'}}>
                              <Box my='4'>
                                 
                                 <FormLabel htmlFor='name' children="Name"/>
                                       <Input required id='name'
                                       value={name} onChange={(e)=>setName(e.target.value)} 
                                       placeholder='name'
                                       type='text'
                                       focusBorderColor='teal'

                                       />
                                 </Box> 

                                 <Box my='4'>
                                       <FormLabel htmlFor='Email' children="Email"/>
                                       <Input required id='email'
                                       value={email} onChange={(e)=>setEmail(e.target.value)} 
                                       placeholder='Enter your Email'
                                       type='email'
                                       focusBorderColor='teal'

                                       />
                                 </Box> 

                                 <Box my='4'>
                                       <FormLabel htmlFor='course' children="Course"/>
                                       <Textarea required id='course'
                                       value={course} onChange={(e)=>setCourse(e.target.value)} 
                                       placeholder='Description....'
                                       type='text'
                                       focusBorderColor='teal'

                                       />
                                 </Box> 

                                 <Box my={4}>
                                    See available courses <Link to="/courses"><Button fontSize={'sm'} color={'teal'} variant={'link'}>Click here</Button></Link>
                                 </Box>

                                 <Button my={4} isLoading={loading}  colorScheme='teal' type='submit'>Send Mail</Button>
                                
                        </form>

          </VStack>
     </Container>

  )
}



export default Request
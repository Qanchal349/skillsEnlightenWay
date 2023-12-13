import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  {useDispatch, useSelector} from "react-redux"
import { contactUs } from '../../redux/actions/other'
import toast from 'react-hot-toast'

const Contact = () => {


const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("") 
const dispatch = useDispatch()
const {loading,error,message:otherMessage} = useSelector(state=>state.other)
 


const submitHandler = (e) =>{
    e.preventDefault() 
    console.log(name,email,message)
    dispatch(contactUs(name,email,message))
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
             <Heading children="Contact us"/>
               
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
                                       <FormLabel htmlFor='message' children="Message"/>
                                       <Textarea required id='message'
                                       value={message} onChange={(e)=>setMessage(e.target.value)} 
                                       placeholder='Message....'
                                       type='text'
                                       focusBorderColor='teal'

                                       />
                                 </Box> 

                                 <Box my={4}>
                                    Request for a course <Link to="/request"><Button fontSize={'sm'} color={'teal'} variant={'link'}>Click here</Button></Link>
                                 </Box>

                                 <Button my={4} colorScheme='teal' isLoading={loading} type='submit'>Send Mail</Button>
                                
                        </form>

          </VStack>
     </Container>

  )
}

export default Contact
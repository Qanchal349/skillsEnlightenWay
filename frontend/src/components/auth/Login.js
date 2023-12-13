import React, { useState } from 'react'
import "./Login.css"
import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user'



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch  = useDispatch();

   
  const submitHandler = (e)=>{
    e.preventDefault(); 
    dispatch(login(email,password)) 
  }


  return (
    <Container h={'95vh'}>
       <VStack h={'full'} justifyContent={'center'} spacing={16}>
           <Heading children="Welcome to course Bundle"/>
            <form style={{width:'100%'}} onSubmit={submitHandler} >
                 <Box my='4'>
                  
                    <FormLabel htmlFor='email' children="Email"/>
                        <Input required id='email'
                         value={email} onChange={(e)=>setEmail(e.target.value)} 
                         placeholder='abc@gmail.com'
                         type='email'
                         focusBorderColor='teal'

                        />
                  </Box> 

                  <Box my='4'>
                  
                   <FormLabel htmlFor='password' children="Password"/>
                      <Input required id='password'
                       value={password} onChange={(e)=>setPassword(e.target.value)} 
                       placeholder='Enter your Password'
                       type='password'
                       focusBorderColor='teal'

                      />
                 </Box> 

                  <Box>
                     <Link to="/forgotpassword"><Button fontSize={'sm'} variant={'link'} >Forgot Password ?</Button></Link>
                  </Box>

                  <Button my={4} colorScheme='teal' type='submit'>Login</Button>
                   <Box my={4}>
                       New user? <Link to="/register"><Button fontSize={'sm'} color={'teal'} variant={'link'}>Sign Up</Button> {"  "} here</Link>
                   </Box>
           </form>
       </VStack>
    </Container>
  )
}

export default Login
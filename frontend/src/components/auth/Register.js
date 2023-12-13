import React, { useState } from 'react'
import "./Login.css"
import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions/user'


export const fileUploadCss ={
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"teal",
    backgroundColor:"white"
}

const fileUploadStyle={
     "&::file-selector-button":fileUploadCss
}



const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [imagePrev, setImagePrev] = useState()
  const [image, setImage] = useState("")

  const dispatch = useDispatch() ;
  
  const profileHandler = (e)=>{
     const file = e.target.files[0]
     const reader = new FileReader();
     reader.readAsDataURL(file) 
     reader.onloadend=()=>{
         setImagePrev(reader.result) 
         setImage(file) 
     }
  }


 const submitHandler = (e)=>{
       e.preventDefault() 

       const myForm = new FormData();
       myForm.append('name',name)
       myForm.append('email',email)
       myForm.append('password',password)
       myForm.append('file',image)
       dispatch(register(myForm)) 
      
 } 



  return (
    <Container h={'95vh'}>
       <VStack h={'full'} justifyContent={'center'} spacing={16}>
           
            <form  onSubmit={submitHandler} style={{width:'100%'}}>

                     <Box my='4' display={'flex'} justifyContent={'space-around'}>
                       <Avatar src={imagePrev} />
                       <Heading children="Create an Account"/>
                        
                     </Box>

                    <Box my='4'>
                  
                    <FormLabel htmlFor='name' children="Name"/>
                      <Input required id='name'
                       value={name} onChange={(e)=>setName(e.target.value)} 
                       placeholder='John'
                       type='text'
                       focusBorderColor='teal'

                      />
                   </Box>


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

                 <Box my='4'>
                  
                  <FormLabel htmlFor='chooseAvatar' children="Choose Avatar"/>
                     <Input required id='chooseAvatar'
                      type='file'
                      accept='image/*'
                      focusBorderColor='teal'
                      css={fileUploadStyle}
                      onChange={profileHandler}

                     />
                </Box>

                  <Button my={4} colorScheme='teal' type='submit'>Sign Up</Button>
                  <Box my={4}>
                       Already Signed Up? <Link to="/login"><Button fontSize={'sm'} color={'teal'} variant={'link'}>Login</Button></Link>
                  </Box>
           </form>
       </VStack>
    </Container>
  )
}


export default Register
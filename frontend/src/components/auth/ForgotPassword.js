import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../../redux/actions/profile'
import {useNavigate} from 'react-router-dom'

const ForgotPassword = () => {

 const [email, setEmail] = useState("")
 const dispatch = useDispatch() 
 const {loading,error,message} = useSelector(state=>state.profile) 


 
 const submitHandler = (e) =>{
  e.preventDefault()     
    dispatch(forgotPassword(email))
   
 } 

 useEffect(() => {
    if(error){
       toast.error(error)

    }
    if(message){
      toast.success(message)
      dispatch({type:'clearMessage'})
     
    }
   
 }, [dispatch,error,message])
 

  return (
     <Container h={'90vh'} padding={16}>
           <form onSubmit={submitHandler}>
            
             <Heading children="Forgot Password" my={16} textTransform={'uppercase'} textAlign={['center','left']}/>
             <VStack spacing={'8'}>
                       <Input required id='email'
                         value={email} onChange={(e)=>setEmail(e.target.value)} 
                         placeholder='abc@gmail.com'
                         type='email'
                         focusBorderColor='teal'

                        />
             </VStack>
             <Button type='submit' my={4} colorScheme='teal' w={'full'}>Send Reset Link</Button>
           </form>


     </Container>
  )
}

export default ForgotPassword
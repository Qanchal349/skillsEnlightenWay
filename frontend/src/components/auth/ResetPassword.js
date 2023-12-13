import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../../redux/actions/profile'

const ResetPassword = () => {

 const [password, setPassword] = useState("")
 const params = useParams()
 const dispatch = useDispatch() 
 const {loading,error,message} = useSelector(state=>state.profile) 
 const navigate = useNavigate() 
 
 const submitHandler = async(e) =>{
   e.preventDefault()     
   await dispatch(resetPassword(params.token,password))
   
 } 


 useEffect(() => {
    if(error){
       toast.error(error)
       dispatch({type:'clearError'})
    }
    if(message){
      toast.success(message)
      dispatch({type:'clearMessage'})
      navigate('/login')
    }
   
 }, [dispatch,error,message])

  return (
     <Container h={'86vh'} padding={16}>
           <form  onSubmit={submitHandler}>
            
             <Heading children="Reset Password" my={16} textTransform={'uppercase'} textAlign={['center','left']}/>
             <VStack spacing={'8'}>
                       <Input required id='password'
                         value={password} onChange={(e)=>setPassword(e.target.value)} 
                         placeholder='New Password'
                         type='password'
                         focusBorderColor='teal'

                        />
             </VStack>
             <Button isLoading={loading} type='submit' my={4} colorScheme='teal' w={'full'}>Reset Password</Button>
           </form>


     </Container>
  )
}

export default ResetPassword
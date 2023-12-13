import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePassword } from '../../redux/actions/profile'
import toast from 'react-hot-toast'

const ChangePassword = () => {

  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const dispatch = useDispatch()

  const {loading,message,error} = useSelector(state=>state.profile) 

  const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(changePassword(oldPassword,newPassword));
     
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
    
   }, [dispatch,message,error])
  


  return (
      <Container py={16} minH={'90vh'} >
          <form onSubmit={submitHandler} >
                <Heading my={16} textAlign={['center','left']} > Change Password </Heading>
                <VStack spacing={8} >
                      <Input required id='password'
                         value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} 
                         placeholder='Enter Old Password'
                         type='password'
                         focusBorderColor='teal'

                        />
                         <Input required id='password'
                         value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} 
                         placeholder='Enter New Password'
                         type='password'
                         focusBorderColor='teal'

                        />
                   <Button isLoading={loading} w={'full'} colorScheme='teal' type='submit'>Change</Button>

               </VStack>
          </form>
      </Container>
  )
}

export default ChangePassword
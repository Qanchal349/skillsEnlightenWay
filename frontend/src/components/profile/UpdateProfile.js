import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateProfile } from '../../redux/actions/profile'
import { getMyProfile } from '../../redux/actions/user'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = ({user}) => {

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const {loading,error,message} = useSelector(state=>state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate() 


  const submitHandler = async(e)=>{
     e.preventDefault() ;
     await dispatch(updateProfile(name,email));
     dispatch(getMyProfile())
     navigate('/profile')
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
  <Container py={16} minH={'90vh'} >
  <form onSubmit={submitHandler} >
        <Heading my={16} textAlign={['center','left']} > Update Profile </Heading>
        <VStack spacing={8} >
              <Input required id='name'
                 value={name} onChange={(e)=>setName(e.target.value)} 
                 placeholder='Name'
                 type='text'
                 focusBorderColor='teal'

                />
                 <Input required id='email'
                 value={email} onChange={(e)=>setEmail(e.target.value)} 
                 placeholder='Email'
                 type='email'
                 focusBorderColor='teal'

                />
           <Button isLoading={loading} w={'full'} colorScheme='teal' type='submit'>Update</Button>

       </VStack>
  </form>
</Container>
  )
}

export default UpdateProfile
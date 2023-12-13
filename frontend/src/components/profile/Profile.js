import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import {RiDeleteBin7Fill} from "react-icons/ri"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfilePicture } from '../../redux/actions/profile'
import toast from 'react-hot-toast'
import { cancelSubscription, getMyProfile } from '../../redux/actions/user'
import { removeFromPlaylist } from '../../redux/actions/course'


export const fileUploadCss={
  cursor:"pointer",
  marginLeft:"-5%",
  width:"110%",
  border:"none",
  height:"100%",
  color:"teal",
  backgroundColor:"white"
}

const Profile = ({user}) => {
 const dispatch = useDispatch(); 
 const {loading,message,error} = useSelector(state=>state.profile)
 const {loading:subscriptionLoading,message:subscribeMessage,error:subscriptionError} = useSelector(state=>state.subscription) 


 const removeFromPlayListHandler= async(item)=>{
     console.log(item._id.toString())
     await dispatch(removeFromPlaylist(item._id)) 
     dispatch(getMyProfile())       
 }

 

 const changeImageSubmitHandler = async(e,image)=>{
   e.preventDefault()

   const myForm = new FormData() 
   myForm.append('file',image);
   await dispatch(updateProfilePicture(myForm))
   dispatch(getMyProfile())
} 

 const cancelSubscriptionHandler =(e)=>{
     dispatch(cancelSubscription()) 

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

    if(subscriptionError){
      toast.error(subscriptionError) 
      dispatch({type:'clearError'})
    }

    if(subscribeMessage){
      toast.success(subscribeMessage) 
      dispatch({type:'clearMessage'}) 
      dispatch(getMyProfile())
    }

    
  
  }, [dispatch,message,error])
  

 const {isOpen,onClose,onOpen} = useDisclosure()


  return (
     <Container  maxW={'container.lg'} py={8} style={{minHeight:"100vh"}}>
       
         <Heading children="Profile" m={4} textTransform={"uppercase"}/>
         <Stack padding={5} justifyContent={"flex-start"} direction={['column','row']} alignItems={'center'} spacing={[8,16]}>
              <VStack>
                  <Avatar src={user.avatar.url} boxSize={'48'}/>
                  <Button onClick={onOpen} colorScheme='teal' variant={'ghost'}>Change Profile</Button>
              </VStack>
              <VStack spacing={'4'} alignItems={['center','flex-start']}>
                 <HStack>
                    <Text color={'blackAlpha.500'} children="Name" fontWeight={'bold'}></Text>
                    <Text children={user.name} fontWeight={'400'}></Text>
                  </HStack>
                  <HStack>
                    <Text color={'blackAlpha.500'} children="Email : " fontWeight={'bold'}></Text>
                    <Text children={user.email} fontWeight={'400'}></Text>
                 </HStack>
                 <HStack>
                    <Text color={'blackAlpha.500'} children="CreatedAt : " fontWeight={'bold'}></Text>
                    <Text children={user.createdAt.toString()} fontWeight={'400'}></Text>
                 </HStack>

               {user.role!=='admin' && <HStack>
                       <Text children="Subscription : " fontWeight={'bold'}/>
                       { user.subscription && user.subscription.status==='active' ? <Button isLoading={subscriptionLoading} onClick={cancelSubscriptionHandler} >Cancel Subscription</Button> : <Link to='/subscribe'><Button color={'teal'}>Subscribe </Button></Link>}    
                </HStack>}
           
                <Stack direction={['column','row']} alignItems={'center'}>
                    <Link to="/updateprofile"><Button>Update Profile</Button></Link>
               
                    <Link to="/changepassword"><Button>Change Password </Button></Link>
               </Stack> 
             </VStack>
         </Stack>
         <Heading children="PlayList" size='md'/>
        {
           user.playlist.length > 0 && (
               <Stack direction={['column','row']} alignItems={'center'} flexWrap={'wrap'} p={4}>
                   {user.playlist.map((item,index)=>(
                      <VStack w={48} m={2} key={index}>
                           <Image boxSize={'full'} objectFit={'contain'} src={item.poster}/>
                           <HStack>
                             <Link to={`/course/${item.course}`}>
                               <Button variant={'ghost'}>Watch Now</Button>
                             </Link>
                             <Button onClick={()=>removeFromPlayListHandler(item)}><RiDeleteBin7Fill/></Button>
                           </HStack>
                      </VStack>
                   ))}
               </Stack>
           )
        }

       <ChangeProfileBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} loading={loading} /> 

     </Container>
  )
}


function ChangeProfileBox({isOpen,onClose,changeImageSubmitHandler,loading}){

  const [image,setImage] = useState();
  const [imagePrev,setImagePrev] = useState();


  const changeProfile=(e)=>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file) 
        reader.onloadend=()=>{
            setImagePrev(reader.result) 
            setImage(file) 
        }
  }


  const closeHandler = ()=>{
     onClose();
     setImagePrev("");
     setImage("");
  }

   return (
     <Modal isOpen={isOpen} onClose={closeHandler}>
        <ModalOverlay backdropFilter={'blur(4px)'}/>
        <ModalContent>
            <ModalHeader>Change Profile</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
               <Container>
                 <form  onSubmit={(e)=>changeImageSubmitHandler(e,image)}>
                     <VStack spacing={8}>
                       
                        {imagePrev && <Avatar src={imagePrev} boxSize={48}/>}
                         <Input onChange={changeProfile} type={'file'} css={{"&::file-selector-button":fileUploadCss}}/>
                         <Button isLoading={loading} w={'full'} color={'teal.400'} type='submit'>Change</Button>
                     </VStack>
                 </form>
               </Container>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={closeHandler} >
                 Cancel
              </Button>
            </ModalFooter>
        </ModalContent>

     </Modal>
   )
}



export default Profile
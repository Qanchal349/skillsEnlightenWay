import React from 'react'
import ColorModeSwitcher from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import {RiDashboard2Fill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/actions/user'


const Header = ({isAuthenticated=false,user}) => {

 const {isOpen,onOpen,onClose} = useDisclosure()
 const dispatch = useDispatch();
 
 const logoutHandler = ()=>{
     onClose()
     dispatch(logout())  
 }

  return (
   <>
     
       <Button colorScheme={'teal'} width={10} height={10} rounded={'full'}
          position={'fixed'}
          top={'6'}
          left={'6'}
          zIndex={'overlay'}
          onClick={onOpen}
          >
        <RiMenu5Fill style={{fontSize:"20px"}}/>
       </Button>
 
      <Drawer placement='left' isOpen={isOpen} onClose={onClose} >
         
           <DrawerOverlay backdropFilter={"blur(1px)"}/>
           <DrawerContent>
             <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLE</DrawerHeader>
             <DrawerBody>
               <VStack spacing={"4"} alignItems={'flex-start'}>
                 <Link onClick={onClose} to="/"><Button variant={'ghost'}>Home</Button></Link>
                 <Link onClick={onClose} to="/courses"><Button variant={'ghost'}>See All Courses</Button></Link>
                 <Link onClick={onClose} to="/request"><Button variant={'ghost'}>Request a Course</Button></Link>
                 <Link onClick={onClose} to="/contact"><Button variant={'ghost'}>Contact Us</Button></Link>
                 <Link onClick={onClose} to="/about"><Button variant={'ghost'}>About Us</Button></Link>
                
                <HStack justifyContent={"space-evenly"} position={'absolute'} bottom={'2rem'} width={'80%'}>
                   {isAuthenticated ? <>
                     
                     <VStack>
                       <HStack>
                           <Link onClick={onClose} to="/profile"><Button variant={'ghost'}>Profile</Button></Link>
                           <Button  variant={'ghost'} onClick={logoutHandler}> <RiLogoutBoxLine /> Logout</Button>
                       </HStack>
                       {user && user.role==="admin" && <Link to="/admin/dashboard"><Button bg={'teal.600'} textColor={'white'} > <RiDashboard2Fill  style={{margin:"4px"}} /> Dashboard </Button></Link>}
                     </VStack>
                    
                   </> : <>
                            <Link onClick={onClose} to="/login"><Button  bg={'teal.600'} textColor={'white'}>Login</Button></Link>
                            <p>OR</p>
                            <Link onClick={onClose} to="/register"><Button bg={'teal.600'}  textColor={'white'}>Sign Up</Button></Link>
                   </>} 
                </HStack> 
               </VStack>
             </DrawerBody>
           </DrawerContent>

      </Drawer>

   
   </>
  )
}

export default Header
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from '../../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser, getAllAdminUser, updateUserRole } from '../../../../redux/actions/admin'
import toast from "react-hot-toast"
import Loader from "../../../layout/loader/Loader"



const Users = () => {

 const {users,error,loading,message} = useSelector(state=>state.admin)
 const dispatch = useDispatch()

 const updateHandler =(userId)=>{
    dispatch(updateUserRole(userId))
 }

 const deleteHandler=(userId)=>{
    dispatch(deleteUser(userId))
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
     dispatch(getAllAdminUser()) 

  }, [dispatch,error,message])
   


  return (
      <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
            
              {
                loading ? <Loader/> : <>
                     <Box p={[0,16]} overflowX={'auto'}>
                  <Heading textTransform={'uppercase'}
                    my={16} textAlign={['center','left']}
                    size={'md'}
                    children='All Users'/>
                  <TableContainer w={['100vw','full']}>
                       <Table variant={'simple'} size={'lg'}>
                           <TableCaption>All available users in the database</TableCaption>
                           <Thead>
                               <Tr>
                                  <Th>Id</Th>
                                  <Th>Name</Th>
                                  <Th>Email</Th>
                                  <Th>Role</Th>
                                  <Th>Subscription</Th>
                                  <Th isNumeric>Action</Th>
                               </Tr>
                           </Thead>
                           <Tbody>
                              {users && users.map((item,index)=>(
                                 <Row key={index} item={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
                              ))}
                           </Tbody>
                       </Table>
                  </TableContainer>
             </Box>
                </>
              }
             <Sidebar/>

      </Grid>
  )
}

export default Users



function Row({item,updateHandler,deleteHandler}){
    return (
       <Tr>
          <Td>#{item._id}</Td>
          <Td>{item.name}</Td>
          <Td>{item.email}</Td>
          <Td>{item.role}</Td>
          <Td>{ item.subscription && item.subscription.status==='active'?'Active':'Inactive'}</Td>
          <Td isNumeric>
             <HStack justifyContent={'flex-end'}>
                <Button variant={'outline'} color={'teal'} onClick={()=>updateHandler(item._id)} >Change Role </Button>
                <Button onClick={()=>deleteHandler(item._id)}><RiDeleteBin7Fill/></Button>
             </HStack>
          </Td>
       </Tr>
    )
}
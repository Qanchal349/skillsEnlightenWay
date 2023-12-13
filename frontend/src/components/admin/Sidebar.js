import { Button, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { NavLink, useLocation } from 'react-router-dom'



const LinkButton=({url,Icon,text ,active})=>{
  return (
      <NavLink to={`/admin/${url}`}><Button colorScheme={active ? 'teal':""} color={active?'white':'teal'} ><Icon style={{margin:'4px'}} />{text}</Button></NavLink>
     )
}


const Sidebar = () => {

  const location = useLocation();

  return (
      <VStack spacing={8} p={16} boxShadow={'-2px 0 10px teal'}>
          <LinkButton url={'dashboard'} Icon={RiDashboardFill} text={'Dashboard'} active={location.pathname==='/admin/dashboard'}/>
          <LinkButton url={'createcourse'} Icon={RiAddCircleFill} text={'Create Course'} active={location.pathname==='/admin/createcourse'} />
          <LinkButton url={'courses'} Icon={RiEyeFill} text={'Courses'}active={location.pathname==='/admin/courses'} />
          <LinkButton url={'users'} Icon={RiUser3Fill} text={'Users'}active={location.pathname==='/admin/users'} />
     </VStack>
  )
}


export default Sidebar 
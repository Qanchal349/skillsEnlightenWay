import { Button, Container, HStack, Heading, Image, Input, Stack, StackItem, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToPlaylist, getAllCourses } from '../../redux/actions/course'
import toast from 'react-hot-toast'
import { getMyProfile } from '../../redux/actions/user'



const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creater,description,lecture})=>{

  

   return (
        <VStack className='course' alignItems={["center","flex-start"]}>
            <Image src={imageSrc} boxSize={60} objectFit={"contain"} />
            <Heading  textAlign={["center","left"]} maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={title} size={'sm'} />
            <Text noOfLines={2} children={description}/>
            <HStack>
            <Text fontWeight={"bold"} textTransform={"uppercase"} children={"Creator"}/>
            <Text fontWeight={"bold"} textTransform={"uppercase"} children={creater}/>
            </HStack>
            <Heading textAlign={"center"} size="xs" children={`Lectures - ${lecture}`} textTransform={'uppercase'} />
            <Heading size="xs" children={`Views - ${views}`} textTransform={'uppercase'} />
             <Stack direction={["column","row"]} alignItems="center"  >
                 <Link to={`/course/${id}`}>
                      <Button colorScheme='teal'>Watch Now </Button>
                 </Link>
                 <Button variant={"ghost"} colorScheme='teal' onClick={()=>addToPlaylistHandler(id)}>Add to PlayList</Button>
            </Stack>  

        </VStack>
   )
}



const Courses = () => {

  const [keyword, setkeyword] = useState("")
  const [category, setCategory] = useState('')
  const dispatch = useDispatch();
  const {loading,error,courses,message} = useSelector(state=>state.courses)


  const addToPlaylistHandler=async(courseId)=>{
      
        await dispatch(addToPlaylist(courseId))
        dispatch(getMyProfile())
  }

  const categories =['Web Development' ,"Android Development ","Data Structue And Algorithm" ,"Data Science"]

   
  useEffect(() => {
    dispatch(getAllCourses(category,keyword))
    
    if(error){
       toast.error(error)
       dispatch({type:'clearError'})
    }

    if(message){
       toast.success(message)
       dispatch({type:'clearMessage'})
    }
    
    console.log(keyword)

  }, [dispatch,error,category,keyword,message])
  

  return (
     <Container minH={'95vh'} maxW="container.lg" padding={'8'} css={{"&::-webkit-scrollbar":{display:"none"}}}>
         <Heading children="All Courses " m={8}/>
         <Input value={keyword} type='text' focusBorderColor='teal.400' onChange={e=>setkeyword(e.target.value)} placeholder='Search Courses....' />
         <HStack overflowX={'auto'} paddingY={8}>
            {categories.map((item,index)=>(
                  <Button onClick={e=>setCategory(item)} key={index} minW={"60"}><Text children={item}/></Button>
            ))}
         </HStack> 
       <Stack  direction={["column","row"]}
                flexWrap="wrap"
                justifyContent={["flex-start","space-evenly"]}
                alignItems={["center","flex-start"]}

       >
             
      {
          courses && courses.map((item)=>(
            <Course
            key={item._id}
            title={item.title}
            description={item.description}
            views={item.views}
            imageSrc={item.poster.url}
            id={item._id}
            creater={item.createdBy}
            lecture={item.numOfVideos}
            addToPlaylistHandler={addToPlaylistHandler}
         
         /> 
          ))
      }    

       </Stack>
     </Container>
  )
}

export default Courses
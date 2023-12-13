import React from 'react'
import {Box, Button, HStack, Heading, Image, Stack, Text, VStack, useTheme} from "@chakra-ui/react"
import "./home.css"
import { Link } from 'react-router-dom'
import vg from "../../assets/images/img.avif"
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from "../../assets/videos/vid2.mp4"


const Home = () => {




  return (
      <section className="home">
            <div className="container">
                <Stack 
                 direction={["column","row"]}
                 height="100%"
                 justifyContent={["center","space-between"]}
                 alignItems="center"
                 spacing={["16","56"]}
                >

                 <VStack width={"full"} alignItems={['center','flex-end']}>
                     <Heading children="LEARN FROM EXPERT" size={'2xl'} />
                     <Text children="Find Valuable Content at Reasonable Price"/>
                     <Link to="/courses">
                      <Button size={'lg'} bg={'teal.600'} textColor={'white'} >Explore Now</Button>
                    </Link>
                 </VStack>
                 <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit={'contain'} />
                </Stack>
             </div>

            <Box padding={'8'} bg={'blackAlpha.800'}>
               <Heading textAlign={'center'} children="OUR BRANDS" color={'teal.400'} />
               <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={'4'}>
               <CgGoogle/>
               <CgYoutube/>
               <SiCoursera/>
               <SiUdemy/>
               <DiAws/>
               </HStack>
            </Box>

             <div className="container2">
                 <video src={introVideo}
                  autoPlay
                  controls controlsList='nodownload nofullscreen noremoteplayback'
                  disablePictureInPicture
                  disableRemotePlayback
                  >
                 </video>
            </div>

      </section>
  )
}

export default Home
import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart, LineChart } from './Chart'
import { useDispatch, useSelector } from 'react-redux'
import { getDashboardStats } from '../../../redux/actions/admin'
import Loader from '../../layout/loader/Loader'



const Databox = ({title,qty,qtyPercentage,profit})=>(
 
  <Box w={['full','22%']} boxShadow={'-2px 0 10px teal'} p={8} borderRadius={'lg'}>
      <Text children={title} />
      <HStack spacing={6}>
         <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
         <HStack>
         <Text children={`${qtyPercentage}%`}/>
         {profit ? <RiArrowUpLine color='green'/> : <RiArrowDownLine color='red'/>}
      </HStack> 
      </HStack>
      <Text children={'Since Last Month'} opacity={0.5}/>
  </Box>

)


const Bar = ({title,value,profit})=>(
    <Box py={4} px={[0,20]}>
        <Heading size="sm" children={title} mb={2}/>
        <HStack w={'full'} alignItems={'center'}>
           <Text children={profit ? '0%' : `-${value}%`}/>
           <Progress w={'full'} value={profit?value:0} colorScheme="teal" />
           <Text children={`${value > 100 ? value :100}%`}  />
        </HStack>
    </Box>
)
   





const Dashboard = () => {

  const dispatch = useDispatch() 
  const {loading,stats,usersCount,subscriptionsCount,viewsCount,subscriptionsPercentage,viewsPercentage,usersPercentage ,usersProfit,subscriptionsProfit,viewsProfit} = useSelector(state=>state.admin)  

   useEffect(() => {
      dispatch(getDashboardStats())
      
   }, [dispatch])
   


  return (
      <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
              {
                   loading || !stats ? <Loader/> : <>
                           
                   <Box  boxSizing='border-box' py={16} px={[4,0]}>
                   <Text textAlign={'center'} opacity={0.5} children={`Last change was on ${String(new Date(stats[11].createdAt)).split('G')[0]}`}/>
                   <Heading children="Dashboard" ml={[0,16]} mb={16} textAlign={['center','left']}/>
                   <Stack direction={['column','row']} minH={24} justifyContent={'space-evenly'}>
                   <Databox title="Views" qty={viewsCount} qtyPercentage={viewsPercentage} profit={viewsProfit}/>
                   <Databox title="Users" qty={usersCount} qtyPercentage={usersPercentage} profit={usersProfit}/>
                   <Databox title="Subscription" qty={subscriptionsCount} qtyPercentage={subscriptionsPercentage} profit={subscriptionsProfit}/> 

                   </Stack>
                  <Box m={[0,16]} borderRadius={'lg'} p={[0,16]} mt={[4,16]}  boxShadow={'-2px 0 10px teal'}>
                   <Heading textAlign={['center','left']} size={'md'} children="Views Graph" p={[8,0]} ml={[0,16]} /> 
                    {/* line graph here */}
                    
                    <LineChart views={stats.map(item=>(item.views))} />
                   
              </Box>

              <Grid templateColumns={['1fr','2fr 1fr']}>


                  <Box p={4}>
                     <Heading textAlign={['center','left']} size={'md'} my={8} ml={[0,16]}>Progress Bar</Heading>
                     <Box>
                       <Bar profit={viewsProfit} title="Views" value={viewsPercentage}/>
                       <Bar profit={usersProfit} title="Users" value={usersPercentage}/>
                       <Bar profit={subscriptionsProfit} title="Subscription" value={subscriptionsPercentage}/>
                     </Box>
                  </Box>

                 <Box p={[0,16]} boxSizing='border-box' py={4}>
                     <Heading textAlign={'center'} size={'md'} mb={4} children="Users"/>
                     <DoughnutChart users={[subscriptionsCount,usersCount-subscriptionsCount]} />
                 </Box>

              </Grid>
              
              </Box>
                  </>
              }
             <Sidebar/>

      </Grid>
  )
}

export default Dashboard
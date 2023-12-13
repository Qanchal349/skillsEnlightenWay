import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import profile from "../../assets/images/profile.jpg"
import { Link } from 'react-router-dom'
import { RiSecurePaymentFill } from 'react-icons/ri'

const Founder =()=>{
    return (
     <Stack direction={["column","row"]} spacing={["4","16"]} padding={8}>
         <VStack>
             <Avatar src={profile}  boxSize={['40','48']} />
             <Text children="Co-Founder" opacity={.7}/>
              
         </VStack>
         <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
             <Heading children="Anchal" size={'sm'}/>
             <Text children="Hi, I'm Full Stack Developer" textAlign={['center','left']} />
         </VStack>
     </Stack>
)}


const TandC = ({termsAndConditions})=>{
     return (
          <Box>
             <Heading children="Terms & Condition" size={'md'} textAlign={['center','left']} my={4}/>
              <Box h={'sm'} p={4} overflowY={'scroll'}>
                <Text textAlign={['center','left']} >{termsAndConditions}</Text>
                <Heading my={4} size={'xs'} children="Refund only applicable for cancellation within 7 days"/>

              </Box>
             

          </Box>
     )
}




const About = () => {
  return (
     <Container maxW={"container.lg"} padding={16} boxShadow={'lg'} >
          <Heading children="About Us" textAlign={'center'} />
          <Founder/>
          <Stack m={8} direction={['column','row']} alignItems={'center'}>
             <Text>Premium Courses are also available for premium users</Text>
             <Link to="/subscribe">
                <Button variant={'ghost'} colorScheme='teal'>Check out Our Plan</Button>
             </Link>
          </Stack> 
          <TandC termsAndConditions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellendus unde sapiente ducimus vel expedita fugiat, voluptatum tenetur neque earum necessitatibus. Omnis voluptas, at libero quibusdam numquam temporibus tempora hic?
Animi odit, fugit sit rem pariatur, voluptates voluptate perspiciatis doloribus nobis quaerat aliquam corrupti. Ratione magnam qui eligendi amet quaerat unde mollitia sequi animi commodi laborum. Numquam laboriosam possimus reprehenderit?
Recusandae rerum id aut ea vero odio quia optio velit modi aperiam cum eveniet, sit repellendus? Veritatis exercitationem magnam eaque, reprehenderit cupiditate, aliquid earum aliquam maiores minus tenetur dicta delectus.
Soluta facilis laborum vel doloribus eaque voluptatum. Illum quod odit voluptatum impedit possimus dolore quisquam numquam voluptates totam molestiae ratione voluptatibus, veritatis sint eos magni, at sapiente quibusdam expedita vitae.
Dolorum ullam eos nesciunt impedit exercitationem? Rerum hic excepturi, quasi pariatur aliquam quas itaque id ducimus numquam iure. Modi, omnis perferendis. Possimus, suscipit? Labore repudiandae dicta tempore nulla excepturi illo?
Quo consequuntur, dolore, debitis doloribus ea deserunt aliquid sequi iusto vitae quas mollitia deleniti sit ab error similique voluptate exercitationem obcaecati doloremque vel eaque. Nihil iure dolorem blanditiis velit quis?
Totam ullam repellat molestias possimus delectus, iure voluptatibus ab consequatur distinctio recusandae, hic, accusamus nulla expedita corrupti sed. Repellendus velit ut esse officia tempora maxime voluptas quis cumque repudiandae labore.
Consequuntur, quasi porro explicabo inventore molestias dolorum omnis fugit repellat culpa rerum non sequi, consectetur atque, nam vero quibusdam aspernatur? Neque illum id quam eum nostrum alias totam voluptas voluptatibus?
Possimus fuga, magnam similique molestiae modi voluptatum nisi vitae velit maiores nam, atque voluptatibus quia quam eligendi aliquid, et aspernatur? Aut minus voluptate iusto distinctio eligendi sapiente soluta veniam sit?
Aut dolore alias, molestiae aperiam illum voluptatibus veniam incidunt, accusantium voluptatum esse ducimus molestias numquam, recusandae architecto necessitatibus natus quia beatae est voluptatem suscipit! Libero repellendus sapiente nulla obcaecati incidunt.
Commodi perspiciatis ducimus quaerat tenetur porro quisquam fugiat tempore? Provident rem magnam tenetur ex minus sint aspernatur vero reiciendis nisi soluta quas dolorem ipsa harum quo, temporibus corrupti reprehenderit natus.
Tempora saepe illo obcaecati cum alias consequatur animi aperiam velit unde autem corporis ad quod perferendis molestias fugit ullam, consectetur nostrum corrupti nemo illum quos qui, numquam quis laudantium. Animi?
Tenetur, possimus sed autem saepe suscipit excepturi ducimus quo voluptatibus corporis exercitationem nesciunt dolorem, iure blanditiis earum illo at debitis quam impedit aliquam voluptates! Dolorem delectus maxime pariatur consequuntur velit!
Beatae dolor, perspiciatis aperiam, accusamus suscipit hic fugiat temporibus tempore et neque fuga sequi. Quas id consectetur quaerat voluptatum, odit rerum iste, voluptatibus distinctio pariatur atque aperiam est, sed non.
Quaerat veniam necessitatibus eveniet placeat sequi. Asperiores maxime, maiores ut iusto, minus ipsa deleniti dolores vel iste inventore consequatur voluptas harum distinctio officiis illo pariatur illum, quo porro reiciendis aliquam.
Unde eos magni pariatur nulla quo consequatur molestias aut, minus veniam, sapiente necessitatibus impedit qui aspernatur. Cupiditate neque excepturi accusamus sed necessitatibus nobis, voluptatem omnis praesentium cumque itaque mollitia ullam.
Magni doloribus aut sapiente reiciendis inventore officiis, doloremque tempore enim sit, tempora consectetur distinctio asperiores. Aliquid atque repellendus aperiam nobis eveniet, dolore facere quibusdam odio non dolores soluta impedit perspiciatis.
Sapiente reprehenderit illo laboriosam fuga blanditiis. Quaerat, placeat inventore? Velit rerum dicta veritatis nam ipsam eaque, quae vero quidem officia ad eveniet quaerat facere est ab necessitatibus ex obcaecati nisi.
Quaerat excepturi numquam nihil placeat laboriosam quas, sapiente sunt eum molestias dolorum libero rem iusto, voluptas ab? In possimus animi quis incidunt esse vero consectetur voluptate, dolore, ratione porro dolores.
Veniam sapiente quae quisquam porro, voluptatem consectetur nam inventore! Rem, veritatis minus? Optio blanditiis nobis ipsam placeat, delectus unde, nisi quisquam explicabo est qui, neque tempora laboriosam et omnis libero!
Cumque eligendi iusto ullam distinctio natus soluta magni facere eos dolorum ad impedit necessitatibus asperiores, amet dolores temporibus tempora vitae illo eaque accusamus! Quisquam dolor quae voluptate eaque dolores cupiditate.
Numquam magni rerum perferendis porro dolorum cumque eos odit fuga, ducimus neque totam nihil quaerat nobis alias adipisci aut non ipsam dolor quisquam eligendi incidunt corporis. Sit ipsum laboriosam id!
Dolorum dolores similique qui ut voluptates ullam, libero autem doloremque voluptate possimus quibusdam, recusandae molestias? Harum, fuga ipsa incidunt nostrum error iure quos officia, atque libero, minus temporibus exercitationem sapiente.
Perferendis consequuntur dicta odit impedit numquam deleniti sequi soluta nobis rerum, architecto asperiores earum dignissimos praesentium minima error quam tempora assumenda, nihil consequatur? Nemo tenetur corporis minus ipsa tempore a?
Perferendis repellat perspiciatis veritatis nisi temporibus maiores quo porro aut, fugiat, pariatur fuga. Dolorem minus, rerum dolores quasi animi similique? Deserunt magnam reprehenderit asperiores perferendis praesentium blanditiis exercitationem. Numquam, nam.
Alias voluptatibus maxime fugit atque dolorem nemo pariatur ipsum deserunt quidem quos delectus provident doloribus reiciendis, facilis, veniam, dolore hic officiis facere velit sit. Deleniti et earum ipsa qui numquam!
Id ipsa sunt sit suscipit atque enim eaque ipsum pariatur modi? Maiores similique consectetur, totam aspernatur dignissimos mollitia ullam. Necessitatibus animi beatae voluptatem dicta vitae alias aspernatur aperiam itaque magnam.
Perferendis quaerat totam et dignissimos voluptas labore fugit maiores asperiores itaque, fugiat quos a consectetur nesciunt, iste, eos obcaecati iure quia sint quas quo quod aliquam incidunt molestias ipsa. "/>  
          <HStack my='4' p={4} > 
              <RiSecurePaymentFill fontSize={23} />
              <Heading size={'xs'} children="Payment is secured by Razorpay" textTransform={'uppercase'}/> 
          </HStack>
 
     </Container>
  )
}

export default About
import React from 'react'
import{Box, Container,Text,TabList,Tab,Tabs,TabPanel,TabPanels} from "@chakra-ui/react"
import { px } from 'framer-motion'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'


const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
    <Box
    d="flex"
    p={3}
    justifyContent= "center"
    bg={"white"}
    w="100%"
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px">
       <Text fontSize="4xl" fontFamily="Work sans" color="black"  paddingLeft={160}  >
              Talk-A-Tive
        </Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg"borderWidth="1px">
    <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
             <Login/>
            </TabPanel>
            <TabPanel>
            <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
    </Box>
    </Container>
  )
}

export default Homepage
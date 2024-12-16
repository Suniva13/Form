import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react"


function App() {

  return (
    <>
      <Box>
        borderRadius={5}
        bg={"gray-50"}
        p={5}
        mx={"auto"}
        boxShadow={"2xl"}
        <Text fontSize={"2xl"} align={"center"} fontWeight={"bold"}> Signup</Text>
        <Stack>
        <FormControl id="name">
          <FormLabel> Name </FormLabel>
          <Input placeholder="Name" borderColor={"gray,400"}/> 
        </FormControl>
        <FormControl id="name">
          <FormLabel> Email </FormLabel>
          <Input placeholder="Email" borderColor={"gray,400"}/>
        </FormControl>
        <FormControl id="name">
          <FormLabel> Password </FormLabel>
          <Input type="password" placeholder="Password" borderColor={"gray,400"}/>
        </FormControl>
        <Button type="Submit" colorScheme="green" >Sign in </Button>
        </Stack>
        
      </Box>
    
    </>
  )
}

export default App
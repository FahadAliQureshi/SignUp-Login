// import React from 'react'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input
  } from '@chakra-ui/react'
const Login = () => {
  return (
    <>
    Login
     <form action=""> <label htmlFor="" >Email:</label> 
     <input type="email" name="username"/> 
     <label htmlFor="" >Password:</label> 
     <input type="pasword"name="psw"/> 
    <button>Submit</button> </form> 

    {/* <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl> */}
    </> 
  )
}

export default Login
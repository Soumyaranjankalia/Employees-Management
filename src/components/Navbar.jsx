import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <Box bg={"yellow"}>
        <Flex justifyContent="space-around">
            <Box><Link to='/'>Home</Link></Box>
            <Box><Link to='/employees'>Employees</Link></Box>
            <Box><Link to='/login'>Login</Link></Box>
            <Box><Link to='/register'>Register</Link></Box>
        </Flex>
    </Box>
  )
}

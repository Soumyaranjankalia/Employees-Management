import { Box, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    name: "",
    email: "",
    username: "",
    password:"",
    mobile: "",
    description: "",
  });

  const {name,email,username,password,mobile,description} = state

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
      axios
        .post("https://masai-api-mocker.herokuapp.com/auth/login", state)
        .then((res) => console.log(res.data));
        alert("Login Successful")
      navigate("/");
      
  };

  return (
    <Box component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '35ch' },
    }}
    noValidate
    autoComplete="off">
    
      <Input
        id="outlined-basic"
        value={username}
        name="username"
        onChange={handleInputChange}
        placeholder="Enter your Username"
        variant="outline"
      />
      <br />
      <Input
        id="outlined-basic"
        value={password}
        name="password"
        onChange={handleInputChange}
        placeholder="Enter your password"
        variant="outline"
      />
      <br />
      
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
};

import * as React from 'react';
import { Input , Button, Box } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { UserAdded } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

export const AddEmployees = () => {

    const [state, setState] = React.useState({
        name:"",
        email:"",
        username:"",
        mobile:"",
        description:"",
        gender:"",
        salary:"",
        age:"",
        image:""
    })

    const [error, setError] = React.useState("")

    const {name,email,username,mobile,description,gender,salary,age,image} = state

    let dispatch = useDispatch()

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        let{name,value} = e.target;
        setState({...state,[name]:value})
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        if(!name || !email || !username || !mobile || !description|| !gender || !salary || !age || !image){
            setError("please fill all the filed")
        }else{
            dispatch(UserAdded(state))
            navigate("/employees")
            setError("")
        }
    }

  return (
    <div>
        <h3>Enter User Details</h3>
        <br />
        {error && <h3>{error}</h3>}
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Input id="outlined-basic" value={name}   name="name" onChange={handleInputChange} placeholder="Enter your Name" variant="outline"/>
      <br />
      <Input id="outlined-basic" value={email}  name="email" onChange={handleInputChange} placeholder="Enter your Email" variant="outline" />
      <br />
      <Input id="outlined-basic" value={username}  name="username" onChange={handleInputChange} placeholder="Enter your Username" variant="outline" />
      <br />
      <Input id="outlined-basic" value={mobile}  name="mobile" onChange={handleInputChange} placeholder="Enter your Contact Number" variant="outline" />
      <br />
      <Input id="outlined-basic" value={description}name="description" onChange={handleInputChange} placeholder="Enter your description" variant="outline" />
      <br />
      <Input id="outlined-basic" value={gender}name="gender" onChange={handleInputChange} placeholder="Enter your gender" variant="outline" />
      <br />
      <Input id="outlined-basic" value={salary}name="salary" onChange={handleInputChange} placeholder="Enter your salary" variant="outline" />
      <br />
      <Input id="outlined-basic" value={age}name="age" onChange={handleInputChange} placeholder="Enter your age" variant="outline" />
      <br />
      <Input id="outlined-basic" value={image}name="image" onChange={handleInputChange} placeholder="Enter your image URL" variant="outline" />
      <br />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
    </div>
  )
}

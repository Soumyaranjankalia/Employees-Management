import * as React from 'react';
import { Box , Button, Input} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { SingleUsers, UpdateUsers } from '../Redux/action';
import { useNavigate, useParams } from 'react-router-dom';

export const EditEmployee = () => {

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

    const {id} = useParams()

    const {user} = useSelector((state) => state.users)

    React.useEffect(() => {
        dispatch(SingleUsers(id))
    },[])

    React.useEffect(() => {
        if(user) {
            setState({...user});
        }
    },[user])

    const handleInputChange = (e) => {
        let{name,value} = e.target;
        setState({...state,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !email || !username || !mobile || !description || !gender|| !salary || !age || !image){
            setError("please fill all the filed")
        }else{
            dispatch(UpdateUsers(state,id))
            navigate("/employees")
            setError("")
        }
    }

  return (
    <div>
        <h3>Update User Details</h3>
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
      <Input id="outlined-basic" value={name || ""}   name="name" onChange={handleInputChange} label="Enter your Name" variant="outline"/>
      <br />
      <Input id="outlined-basic" value={email || ""}  name="email" onChange={handleInputChange} label="Enter your Email" variant="outline" />
      <br />
      <Input id="outlined-basic" value={username || ""}  name="username" onChange={handleInputChange} label="Enter your Contact Number" variant="outline" />
      <br />
      <Input id="outlined-basic" value={mobile || ""}name="mobile" onChange={handleInputChange} label="Enter your Address" variant="outline" />
      <br />
      <Input id="outlined-basic" value={description || ""}name="description" onChange={handleInputChange} label="Enter your Address" variant="outline" />
      <br />
      <Input id="outlined-basic" value={gender || ""}name="gender" onChange={handleInputChange} label="Enter your Address" variant="outline" />
      <br />
      <Input id="outlined-basic" value={salary || ""}name="salary" onChange={handleInputChange} label="Enter your Address" variant="outline" />
      <br />
      <Input id="outlined-basic" value={age || ""}name="age" onChange={handleInputChange} label="Enter your Address" variant="outline" />
      <br />
      <Input id="outlined-basic" value={image || ""}name="image" onChange={handleInputChange} label="Enter your Address" variant="outline" />
      <br />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
    </div>
  )
}
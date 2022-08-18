import * as React from 'react';
import {Link} from 'react-router-dom'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,ButtonGroup,Button
} from '@chakra-ui/react'

import {useDispatch, useSelector} from 'react-redux'
import { deleteUsers, loadUsers, SingleUsers } from '../Redux/action';
import { useNavigate } from 'react-router-dom';


export function Employees() {


    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    React.useEffect(() => {
        dispatch(loadUsers())
    },[])

    const {users} = useSelector(state => state.users)


    const handleDelete = (id) => {
        dispatch(deleteUsers(id))
    }

    const handleView = (e) => {
      dispatch(SingleUsers(e))
      navigate(`/employees/${id}`)
  }


  return (
    <>
    <Button m={"20px"}><Link to="/employees/create">Add Employee</Link></Button>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <Thead>
          <Tr>
            <Td align="center">Name</Td>
            <Td align="center">Email</Td>
            <Td align="center">Username</Td>
            <Td align="center">Mobile</Td>
            <Td align="center">Description</Td>
            <Td align="center">Action</Td>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(users => (
            <Tr
              key={users.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <Td component="th" scope="row" align="center">
                {users.name}
              </Td>
              <Td align="center">{users.email}</Td>
              <Td align="center">{users.username}</Td>
              <Td align="center">{users.mobile}</Td>
              <Td align="center">{users.description}</Td>
              <Td align="center">
                <ButtonGroup
                  variant="contained"      
                  aria-label="outlined button group"
                  className="btn"
                >
                  <Button
                    color="error"
                    onClick={() => {
                      handleView(users.id);
                    }}
                  >
                    View
                  </Button>
                  <Button
                    color="error"
                    onClick={() => {
                      handleDelete(users.id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => navigate(`/employees/${users.id}/edit`)}
                  > Edit
                  </Button>
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    </>
  );
}

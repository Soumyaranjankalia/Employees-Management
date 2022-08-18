import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { SingleUsers } from '../Redux/action'


export const EmployeeDetails = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [view,setView] = React.useState({})


  console.log({user})
  return (
    <div>
      
        <h3>{user ? user.name : ""}</h3>

      
    </div>
  )
}

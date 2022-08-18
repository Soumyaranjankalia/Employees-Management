import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AddEmployees } from '../components/AddEmployees'
import { EditEmployee } from '../components/EditEmployee'
import { EmployeeDetails } from '../components/EmployeeDetails'
import { Employees } from '../components/Employees'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Navbar } from '../components/Navbar'
import { Register } from '../components/Register'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/employees' element={<Employees/>}/>
            <Route path='/employees/create' element={<AddEmployees/>}/>
            <Route path='/employees/:id' element={<EmployeeDetails/>}/>
            <Route path="/employees/:id/edit" element={<EditEmployee/>}></Route>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

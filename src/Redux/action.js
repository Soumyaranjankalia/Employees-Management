import axios from 'axios'

// Action types
export const GET_USERS = "GET_USERS"
export const DELETE_USER = "DELETE_USER"
export const ADD_USER = "ADD_USER"
export const GET_SINGLE_USER = "GET_SINGLE_USER"
export const UPDATE_USER = "UPDATE_USER"
export const VIEW_USER = "VIEW_USER"
export const AUTH = "AUTH"

const getUsers = (payload) => ({
        type:GET_USERS,
        payload
}) 

const delUser = () => ({
    type:DELETE_USER
})

const addUser = () => ({
    type:ADD_USER
})

const getSingleUser = (payload) => ({
    type:GET_SINGLE_USER,
    payload
})

const viewUser= (payload) => ({
    type:VIEW_USER,
    payload
})

const updateUser = () => ({
    type:UPDATE_USER
})

// export const authAction = (payload) => {
//     return {
//         type: "AUTH",
//         payload
//     }
// }


// Get data 
export const loadUsers = () => (dispatch) => {
    axios.get("https://employee-data-soumya.herokuapp.com/employees").then((res) => {
        console.log(res.data)
        dispatch(getUsers(res.data))
    }).catch((err) => console.log(err))
}
// delete data
export const deleteUsers = (id) => (dispatch) => {
    axios.delete(`https://employee-data-soumya.herokuapp.com/employees/${id}`).then((res) => {
        console.log(res.data)
        dispatch(delUser())
        dispatch(loadUsers())
    }).catch((err) => console.log(err))
}
// post data
export const UserAdded = (payload) => (dispatch) => {
    axios.post(`https://employee-data-soumya.herokuapp.com/employees`,payload).then((res) => {
        console.log(res.data)
        dispatch(addUser())
        // dispatch(loadUsers())
    }).catch((err) => console.log(err))
}
// single user data
export const SingleUsers = (id) => (dispatch) => {
    axios.get(`https://employee-data-soumya.herokuapp.com/employees/${id}`).then((res) => {
        // console.log(res.data)
        dispatch(getSingleUser(res.data))
    }).catch((err) => console.log(err))
}

// update User
export const UpdateUsers = (user,id) => (dispatch) => {
    axios.put(`https://employee-data-soumya.herokuapp.com/employees/${id}`,user).then((res) => {
        console.log(res.data)
        dispatch(updateUser())
    }).catch((err) => console.log(err))
}
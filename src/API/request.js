import axios from "axios";
import { getUsers, addUser, editUser, deleteUser } from "../actions";

const request = axios.create({
    // baseURL: "https://my-json-server.typicode.com/talitastravassos/users-API/users/"
    baseURL: "http://localhost:3000/users"
})

export const fetchUsers = () => {
    return dispatch => {
        request.get("")
            .then( res => {
                // console.log(res)
                dispatch(getUsers(res.data))
            })

    }
}

export const add = (user) => {
    return dispatch => {
        request.post("", user)
            .then( res => {
                console.log(res)
                dispatch(addUser(user))
                fetchUsers()
            })

    }
}

export const edit = (id, update) => {
    return dispatch => {
        request.put(`/${id}`, update)
            .then( res => {
                console.log(res)
                dispatch(editUser(id))
                fetchUsers()
            })

    }
}

export const deleteData = (id) => {
    return dispatch => {
        request.delete(`/${id}`)
            .then( res => {
                console.log(res)
                dispatch(deleteUser(id))
                fetchUsers()
            })

    }

}

// export default fetchUsers
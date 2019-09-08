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
            })

    }
}

export const edit = (old, update) => {
    return dispatch => {
        request.put(`/${old.id}`, update)
            .then( res => {
                console.log(res)
                dispatch(editUser(update))
            })

    }
}

export const deleteData = (id) => {
    return dispatch => {
        request.delete(`/${id}`)
            .then( res => {
                console.log(res)
                dispatch(deleteUser(id))
            })

    }

}

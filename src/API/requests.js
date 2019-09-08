import axios from "axios";
import { getUsers, addUser, editUser, deleteUser } from "../actions";
import notifications from "../utils/notifications";

const request = axios.create({
    baseURL: "https://my-json-server.typicode.com/talitastravassos/users-API/users/"
    // baseURL: "http://localhost:3000/users"
})

export const fetchUsers = () => {
    return dispatch => {
        request.get("")
            .then( res => {
                // console.log(res)
                dispatch(getUsers(res.data))
            })
            .catch( error => {
                console.log(error)
                notifications.error("Não foi possível carregar os usuários.")
            })

    }
}

export const add = (user) => {
    return dispatch => {
        request.post("", user)
            .then( res => {
                console.log(res)
                notifications.success("Usuário adicionado com sucesso.")
                dispatch(addUser(user))
            })
            .catch( error => {
                console.log(error)
                notifications.error("Não foi possível adicionar o usuário.")
            })

    }
}

export const edit = (old, update) => {
    return dispatch => {
        request.put(`/${old.id}`, update)
            .then( res => {
                console.log(res)
                notifications.success("Usuário editado com sucesso.")
                dispatch(editUser(update))
            })
            .catch( error => {
                console.log(error)
                notifications.error("Não foi possível editar o usuário.")
            })

    }
}

export const deleteData = (id) => {
    return dispatch => {
        request.delete(`/${id}`)
            .then( res => {
                console.log(res)
                notifications.success("Usuário deletado com sucesso.")
                dispatch(deleteUser(id))
            })
            .catch( error => {
                console.log(error)
                notifications.error("Não foi possível deletar o usuário.")
            })
    }

}

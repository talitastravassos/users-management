import axios from "axios";
import { getUsers } from "../actions";

const request = axios.create({
    baseURL: "https://my-json-server.typicode.com/talitastravassos/users-API/users"
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

// export default fetchUsers
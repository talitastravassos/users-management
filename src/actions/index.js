export const getUsers = (users) => {
    return {
        type: "GET_USERS",
        payload: users
    }
}

export const addUser = (user) => {
    return {
        type: "ADD_USERS",
        payload: user
    }
}

export const editUser = (id, update) => {
    return {
        type: "EDIT_USERS",
        payload: id,
        update: update
    }
}

export const deleteUser = (id) => {
    return {
        type: "DELETE_USERS",
        payload: id
    }
}
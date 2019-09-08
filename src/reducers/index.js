import { combineReducers } from "redux";

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state, 
                users: action.payload
            }
        case "ADD_USER":
            return {
                ...state, 
                users: [...state.users, action.payload]
            }    
        case "EDIT_USER":
            return {
                ...state,
                users: state.users.map( user => {
                    return user.id === action.payload.id ? action.payload : user })
            }
        case "DELETE_USER":
            return {
                ...state, 
                users: [...state.users.filter( user => user.id !== action.payload)]
            }                      
        default:
            return state
    }
    
}

export default combineReducers({
    users: usersReducer
})

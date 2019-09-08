import React from 'react'
import LoginForm from '../../components/LoginForm'

const Login = () => {

    return (
        <div style={{display: "flex", flexDirection: "column",alignItems: "center", justifyContent: "center", marginTop: 80}}>
            <img src="https://image.flaticon.com/icons/svg/1006/1006540.svg" width="250" height="250" alt="Login Imagem"/>	
            <LoginForm/>
        </div>
    )
}

export default Login


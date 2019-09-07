import React from 'react'
import Typography from '@material-ui/core/Typography';
import LoginForm from '../../components/LoginForm'

const Login = () => {
    return (
        <div style={{display: "flex", flexDirection: "column",alignItems: "center", justifyContent: "center", marginTop: 200}}>
            <Typography variant="h4" gutterBottom>
                Gerência de Usuários
            </Typography>
            <LoginForm/>
        </div>
    )
}

export default Login


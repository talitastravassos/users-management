import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import auth from "../../utils/auth";
import { withRouter } from 'react-router'

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
    //   flexWrap: 'wrap',
      flexDirection: "column"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing(1),
      }
  }));

const LoginForm = (props) => {
    const classes = useStyles();
    const [values, setValues] = useState({
        email: 'usuario1@email.com.br',
        password: "123456"
    });

      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(values)
      };

    return (
        <React.Fragment>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Email"
                    className={classes.textField}
                    value={values.email}
                    onChange={handleChange('email')}
                    margin="normal"
                />
                <TextField
                    type={'password'}
                    id="standard-name"
                    label="Senha"
                    className={classes.textField}
                    value={values.password}
                    onChange={handleChange('password')}
                    margin="normal"
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    onClick={() => {
                        auth.login(values, () => {
                          props.history.push("/");
                        });
                    }}>
                    Entrar
                </Button>
            </form>
        </React.Fragment>
    )
}

export default withRouter(LoginForm)

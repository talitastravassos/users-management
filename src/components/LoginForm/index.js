import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const LoginForm = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        email: 'usuario1@email.com.br',
        password: ""
    });

      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
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
                <Button variant="contained" color="primary" className={classes.button}>
                    Entrar
                </Button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import auth from "../../utils/auth";
import { withRouter } from 'react-router'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navbar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Gerenciar Usuários
            </Typography>
            <Button 
                color="inherit" 
                onClick={() => {
                    auth.logout(() => {
                        props.history.push("/login");
                    });
                }}>
                Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default withRouter(Navbar)

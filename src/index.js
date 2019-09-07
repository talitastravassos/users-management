import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { store } from "./store";
import './index.css';
import App from './App';
import Login from './containers/Login';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Provider store={store}>
                <Route path="/" exact={true} component={App} />
                <Route path="/login" component={Login} />
            </Provider>
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

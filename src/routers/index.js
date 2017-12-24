import React, { Component } from 'react'
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom'
import App from '../modules/login/login'
import App1 from '../App.1'
export default class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={App1} />                    
                </Switch>
            </BrowserRouter>
        )
    }
}
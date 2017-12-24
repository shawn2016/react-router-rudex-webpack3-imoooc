import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './App.css';
import store from './reduxes/store'
import App from './App'
import Routers from './routers'

const rootElement = document.querySelector('#root')

const renders = Component =>
    render(
        <Provider store={store}>
            <Component />
        </Provider>,
        rootElement
    )
renders(Routers)
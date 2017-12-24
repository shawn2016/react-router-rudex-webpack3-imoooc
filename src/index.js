import React from 'react';
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './App.css';
import { counter } from './index.redux'
import App from './App'
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
// const store = createStore(reducers, compose(
// 	applyMiddleware(thunk),
// 	window.devToolsExtension?window.devToolsExtension():f=>f
// ))
ReactDom.render(
    (<Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('root')
)

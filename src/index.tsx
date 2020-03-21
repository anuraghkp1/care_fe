import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../src/Redux/Reducer';
import * as Sentry from '@sentry/browser';

const store = createStore(reducer, applyMiddleware(thunk));
Sentry.init({dsn: "https://1b6114b624be4dd69ed4f020e3bea4ec@sentry.io/5169790"});
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// gStore = store;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { Provider } from 'react-redux'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feelingReducer = (state = [], action) => {
    if (action.type === 'SET_FEELING') {
        return [...state, action.payload.feeling];
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return [...state, action.payload.understanding];
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if (action.type === 'SET_SUPPORT'){
        return [...state, action.payload.support];
    }
    return state;
}

const commentReducer = (state = [], action) => {
    if (action.type === 'SET_COMMENT') {
        return [...state, action.payload.comment];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }), 
    applyMiddleware(logger),
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();

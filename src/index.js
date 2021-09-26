import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { Provider } from 'react-redux'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';

const blankAnswer = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
};

const answerReducer = (state = blankAnswer, action) => {
    if (action.type === 'SET_FEELING') {
        return {...state, feeling: action.payload.feeling};
    } else if (action.type === 'SET_UNDERSTANDING'){
        return {...state, understanding: action.payload.understanding};
    } else if (action.type === 'SET_SUPPORT'){
        return {...state, support: action.payload.support};
    } else if (action.type === 'SET_COMMENT') {
        return {...state, comments: action.payload.comments};
    }
    return state;
}

// const understandingReducer = (state = '', action) => {
//     if (action.type === 'SET_UNDERSTANDING') {
//         return [...state, action.payload.understanding];
//     }
//     return state;
// }

// const supportReducer = (state = '', action) => {
//     if (action.type === 'SET_SUPPORT'){
//         return [...state, action.payload.support];
//     }
//     return state;
// }

// const commentReducer = (state = '', action) => {
//     if (action.type === 'SET_COMMENT') {
//         return [...state, action.payload.comment];
//     }
//     return state;
// }

const storeInstance = createStore(
    combineReducers({
        answerReducer
        // feelingReducer,
        // understandingReducer,
        // supportReducer,
        // commentReducer
    }), 
    applyMiddleware(logger),
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();

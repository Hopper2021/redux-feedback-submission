import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { Provider } from 'react-redux'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducer = (state = [], action) => {
    return state;
}

const storeInstance = createStore(
    combineReducers({
        reducer
    }), 
    applyMiddleware(logger),
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();

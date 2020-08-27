import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; //array of actions

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //...middlewares - spread the arguments of the actions (apply middleware for logging)

export default store; //new state object - bring into provider (Index.js)
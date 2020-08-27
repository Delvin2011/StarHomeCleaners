//represents all the state of the application (cobine all the states)

import {combineReducers} from 'redux'; //combines all the recucers into one big object

import userReducer from './user/user.reducer';

export default combineReducers ({
    user: userReducer //the key is the userReducer object
})

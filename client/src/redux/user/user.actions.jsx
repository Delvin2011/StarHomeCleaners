//update the reducers with the appropriate value
export const setCurrentUser  = user => ({ //gets user and return action object
    type: 'SET_CURRENT_USER', //action type must be the same as the type the resucer is expecting
    payload: user
});
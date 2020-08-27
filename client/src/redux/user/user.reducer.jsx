const INITIAL_STATE = {
    currentUser: null //similar to this.setState to initialise
}


const userReducer = (state = INITIAL_STATE, action) => //currentstate & required action
{
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state; //if action type isn't user related, return the previous state
    }
};

export default userReducer; 
//hide the website when 1st comes to website
/*import CartActionTypes from './cart-type';
import { addItemToCart, removeItemFromCart } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [] //adding or removing cart items
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) //add new items to the existing list
            }
        case CartActionTypes.SET_CART_FROM_FIREBASE:
            return {
                ...state,
                cartItems: action.payload
            };

            default:
                return state;        

    }
}   

export default cartReducer;*/

//hide the website when 1st comes to website
import CartActionTypes from './cart-type';
import { addItemToCart, removeItemFromCart } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [] //adding or removing cart items
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN: //option can be open or closed hence toggle
            return{
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            console.log(action.payload);
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) //add new items to the existing list
            }

            case CartActionTypes.REMOVE_ITEM:
                return{
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload) //we are trying to keep the item with the id of the item that we don't need to clear out, and we remain with new array
                }     

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id) //we are trying to keep the item with the id of the item that we don't need to clear out, and we remain with new array
            }   
 
        case CartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems: []
            }; 
        
        case CartActionTypes.SET_CART_FROM_FIREBASE:
            return {
                ...state,
                cartItems: action.payload
            };

            default:
                return state;        

    }
}   

export default cartReducer;
import DecoCartActionTypes from "./decoCart-type";
import { addDecoItemToCart, removeDecoItemFromCart } from "./decoCart-utils";

const INITIAL_STATE = {
  hidden: true,
  decoCartItems: [], //adding or removing cart items
};

const decoCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DecoCartActionTypes.TOGGLE_DECOCART_HIDDEN: //option can be open or closed hence toggle
      return {
        ...state,
        hidden: !state.hidden,
      };
    case DecoCartActionTypes.ADD_DECOITEM:
      return {
        ...state,
        decoCartItems: addDecoItemToCart(state.decoCartItems, action.payload), //add new items to the existing list
      };

    case DecoCartActionTypes.REMOVE_DECOITEM:
      return {
        ...state,
        decoCartItems: removeDecoItemFromCart(
          state.decoCartItems,
          action.payload
        ), //we are trying to keep the item with the id of the item that we don't need to clear out, and we remain with new array
      };

    case DecoCartActionTypes.CLEAR_DECOITEM_FROM_CART:
      return {
        ...state,
        decoCartItems: state.decoCartItems.filter(
          (decoCartItem) => decoCartItem.id !== action.payload.id
        ), //we are trying to keep the item with the id of the item that we don't need to clear out, and we remain with new array
      };

    case DecoCartActionTypes.CLEAR_DECOCART:
      return {
        ...state,
        decoCartItems: [],
      };

    case DecoCartActionTypes.SET_DECOCART_FROM_FIREBASE:
      return {
        ...state,
        decoCartItems: action.payload,
      };

    default:
      return state;
  }
};

export default decoCartReducer;

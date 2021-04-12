import DecoCartActionTypes from "./decoCart-type";

export const toggleDecoCartHidden = () => ({
  type: DecoCartActionTypes.TOGGLE_DECOCART_HIDDEN, //we do not need the payload in this case.
});

//action that gets the item that we want to add and return new action type.
//where the action type is CartActionTypes.ADD_ITEM
export const addDecoItem = (item) => ({
  type: DecoCartActionTypes.ADD_DECOITEM,
  payload: item,
});

//gets an item as a property and set type and payload as the item we need to clear.
//create type, set type into action and create reducer that executes the type and bind to the appropriate component, e.g checkout component.
export const clearDecoItemFromCart = (item) => ({
  type: DecoCartActionTypes.CLEAR_DECOITEM_FROM_CART,
  payload: item,
});

export const removeDecoItem = (item) => ({
  type: DecoCartActionTypes.REMOVE_DECOITEM,
  payload: item,
});

export const clearDecoCart = () => ({
  type: DecoCartActionTypes.CLEAR_DECOCART,
});

export const updateDecoCartInFirebase = () => ({
  type: DecoCartActionTypes.UPDATE_DECOCART_IN_FIREBASE,
});

export const setDecoCartFromFirebase = (decoCartItems) => ({
  type: DecoCartActionTypes.SET_DECOCART_FROM_FIREBASE,
  payload: decoCartItems,
});

import { createSelector } from "reselect";

//input selector is a function that gets the whole state and returns a slice of it.

const selectDecoCart = (state) => state.decoCart;

export const selectDecoCartItems = createSelector(
  [selectDecoCart], //array of input selectors
  (decoCart) => decoCart.decoCartItems //outputs of the input selectors
);

export const selectDecoCartHidden = createSelector(
  [selectDecoCart], //array of input selectors
  (decoCart) => decoCart.hidden //outputs of the input selectors
);

export const selectDecoCartItemsCount = createSelector(
  [selectDecoCartItems],
  (
    decoCartItems //returns the total quantity of items
  ) =>
    decoCartItems.reduce(
      (accumulatedQuantity, decoCartItem) =>
        accumulatedQuantity + decoCartItem.quantity,
      0
    ) //accumulating the quantity of each of our cart items
);

export const selectDecoCartTotal = createSelector(
  [selectDecoCartItems],
  (
    decoCartItems //returns the total quantity of items
  ) =>
    decoCartItems.reduce(
      (accumulatedQuantity, decoCartItem) =>
        accumulatedQuantity + decoCartItem.quantity * decoCartItem.price,
      0
    ) //accumulating the quantity of each of our cart items
);
/*Flow
- Passing the reducer state in to the selector and gets the cart object.
- Passed into the cart => cart.cartItems function which passes the cartItems.
- selectCartItemsCount, relying on the selctor, passes the cartItems function which reduces and finaly procues the item count value
- value passed as a prop into the CartIcon component.
*/

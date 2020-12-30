

    /*utility functions allow us to keep files clean and organize functions that we may need in multiple files in one location */
export const addDecoItemToCart = (decoCartItems, decoCartItemToAdd) => { //we will check if the cartItem exist
    const existingDecoCartItem = decoCartItems.find(
        decoCartItem => decoCartItem.id === decoCartItemToAdd.id );
        
        if(existingDecoCartItem) {
            return decoCartItems.map(decoCartItem => 
                decoCartItem.id === decoCartItemToAdd.id
                ? {...decoCartItem, quantity:decoCartItem.quantity + 1}
                : decoCartItem
                )
        }
        //if cartItem is not found in the array, we want to return
        // new array with all the existing cartItems, but also with the an object cartItemToAdd with a base quantity of 1
        //In this way, any of the subsiquent items will reference the base quantity base value
        return [...decoCartItems, {...decoCartItemToAdd, quantity: 1}];

};

export const removeDecoItemFromCart = (decoCartItems, decoCartItemToRemove) => { //we will check if the cartItem exist
    const existingCartItem = decoCartItems.find(
        decoCartItem => decoCartItem.id === decoCartItemToRemove.id );
        
        if(existingCartItem.quantity === 1) {
            return decoCartItems.filter(decoCartItem => 
                decoCartItem.id !== decoCartItemToRemove.id)}

        return decoCartItems.map(
            decoCartItem =>
            decoCartItem.id === decoCartItemToRemove.id 
            ? {...decoCartItem, quantity: decoCartItem.quantity - 1}
            : decoCartItem
        );


    }
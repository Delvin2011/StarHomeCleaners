import React from 'react';
import {connect} from 'react-redux'; //used to bing
import {clearDecoItemFromCart, addDecoItem, removeDecoItem } from '../../redux/decoCart/decoCart-actions';

import './checkout-item.scss';

//we don't have access to the cartItem property, so we do an explicit return in the function and make sure to set the const of the value.
//so as to have access to the cartItem and the clearItem function

const CheckoutItem = ({decoCartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, Quantity, TotalPrice} = decoCartItem;
    return( //disstructuring the values we are going to need
        <div className = 'checkout-item'>
            <div className = 'image-container'>
                <img src = {imageUrl} alt = 'item'/> 
            </div>
            <span className = 'name'>{name}</span>
            <span className = 'quantity'>
                <div className = 'arrow' onClick = {() => removeItem(decoCartItem)}>&#10094;</div>
                    <span className = 'value'>{Quantity}</span>
                <div className = 'arrow' onClick = {() => addItem(decoCartItem)}>&#10095;</div>
            </span>
            <span className = 'price'>{TotalPrice}</span>
            <div className = 'remove-button' onClick = {() =>clearItem(decoCartItem)}>&#10005;</div>
        </div>
    );
};
//new function that calls clearItem function as a prop and pass the cartItem
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearDecoItemFromCart(item)),
    addItem: item => dispatch(addDecoItem(item)),
    removeItem: item => dispatch(removeDecoItem(item))

})

export default connect(null, mapDispatchToProps)(CheckoutItem);


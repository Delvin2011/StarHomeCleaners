/*import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Logo from '../../assets/img/logo1.png';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_TuQvPMHNjEPDafAmwoAmr5ze00WQ7OT3US';

const onToken = token => {
    axios({
        url: 'payment',
        method: 'post',
        data: {
            amount: priceForStripe,
            token
        }
    }).then(response => {
        alert('Payment Successful');
    }).catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with the payment. Please make sure to use provided  credit card')
    })
    
    console.log(token);
    
}
return (
    <StripeCheckout
        label = 'Make Payment'
        name = 'StarHome Cleaners'
        billingAddress
        shippingAddress
        image = {Logo}
        description = {`Your total is R${price}`}
        amount = {priceForStripe}
        panelLabel = 'Make Payment'
        token = {onToken}
        stripeKey = {publishableKey}

    />
    );
};

export default StripeCheckoutButton;*/

import React, { useEffect } from 'react';
import CustomButton from "../CustomButtons/Button";
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';

    class StripeCheckoutButton extends React.Component {  

        constructor(props){
            super(props);   
            this.state = {
                myForm: false
            }
            this.handleSubmit = this.handleSubmit.bind(this);  
        }

     handleSubmit (evt){
        evt.preventDefault();        
        //evt. = "https://www.payfast.co.za/eng/process";
        // trigger submit here
        const form = evt.target;
        console.log(form);
        /*let formData = new FormData(form);
        Object.keys(this.state.myForm).forEach(formName=>{
           formData.append(formName, this.state.myForm[formName]);
        });
    
        fetch("api/to/submit/my/formdata", {
            body: formData,
            method: "post"
        });*/
    }
    
    onInputChange = event => { //destructure off of the event
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {  
        //console.log(this.props.phoneNumber);
        console.log(this.props.item);
    return (
        <div>
            <form action="https://www.payfast.co.za/eng/process" method="POST" id="checkout"> 
                <input type="hidden" name="merchant_id" value="10788743" onChange={this.onInputChange}/>
                <input type="hidden" name="merchant_key" value="bhxrbdcmch80c" onChange={this.onInputChange}/>
                <input type="hidden" name="return_url" value="https://www.starhomecleaners.co.za/TransactionFailed" onChange={this.onInputChange}/>
                <input type="hidden" name="cancel_url" value="http://localhost:3000/TransactionFailed" onChange={this.onInputChange}/>
                <input type="hidden" name="notify_url" value="https://www.starhomecleaners.co.za/notify.html" onChange={this.onInputChange}/>
                <input type="hidden" name="name_first" value= {this.props.item.customerName} onChange={this.onInputChange}/>
                <input type="hidden" name="email_address" value= {this.props.item.email} onChange={this.onInputChange}/>
                <input type="hidden" name="m_payment_id" value="1" onChange={this.onInputChange}/>
                <input type="hidden" name="amount" value= {this.props.item.total} onChange={this.onInputChange}/>
                <input type="hidden" name="item_name" value = {this.props.item.category} onChange={this.onInputChange}/>
                <input type="hidden" name="item_description" value= "10" onChange={this.onInputChange}/>
                <input type="hidden" name="custom_int1" value="1" onChange={this.onInputChange}/>
    
    { this.props.item.phoneNumber !== "" && this.props.item.address !== ""?
        <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' onClick={() => this.props.addItem(this.props.item)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">MAKE PAYMENT</CustomButton></p> 
       : <p style = {{"textAlign" : "center"}}><CustomButton style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">COMPLETE FORM</CustomButton></p> 
    }

            
            </form>
    
        </div>
        );

    }
}
    
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(StripeCheckoutButton);

  /*            <form action="https://www.payfast.co.za/eng/process" method="POST" id="checkout"> 
                <input type="hidden" name="merchant_id" value="10788743" onChange={this.onInputChange}/>
                <input type="hidden" name="merchant_key" value="bhxrbdcmch80c" onChange={this.onInputChange}/>
                                <input type="hidden" name="item_name" value = {this.props.category} onChange={this.onInputChange}/>
                                                <input type="hidden" name="amount" value= {this.props.total} onChange={this.onInputChange}/>









                                                                <input type="hidden" name="merchant_id" value="10019198" onChange={this.onInputChange}/>
                <input type="hidden" name="merchant_key" value="8x2kb1rbryu18" onChange={this.onInputChange}/>
                <input type="hidden" name="return_url" value="https://www.starhomecleaners.co.za/TransactionFailed" onChange={this.onInputChange}/>
                <input type="hidden" name="cancel_url" value="https://www.starhomecleaners.co.za/TransactionFailed" onChange={this.onInputChange}/>
                <input type="hidden" name="notify_url" value="https://www.starhomecleaners.co.za/notify.html" onChange={this.onInputChange}/>
                                */





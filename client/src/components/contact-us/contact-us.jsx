import React, { Component } from 'react';  
import ContactUs from './popup';  



class Contact extends Component {

render() { 
    return (  
        <div>
            {this.props.showPopup?
                <ContactUs showPopup = {this.props.showPopup} closePopup={this.props.closePopup} /> 
                : this.props.showPopupPhone?
                    <ContactUs showPopupPhone = {this.props.showPopupPhone} closePopupPhone={this.props.closePopupPhone} />
                    : this.props.showPopupGetQuote?
                        <ContactUs showPopupGetQuote = {this.props.showPopupGetQuote} closePopupGetQuote={this.props.closePopupGetQuote} />
                        : null
            }                  
        </div>  
        ); 
    }
}  

export default Contact;
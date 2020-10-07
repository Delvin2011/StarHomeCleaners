import React from 'react';  
import {Popup,PopupInner,LogoContainer,Form,CloseButton,Response,Errors,Message4,Details,Right,ContentTitle,Title,PayGridSplit,PayOptions} from '../outdoor/outdoor-styles'; 
import {CreditCardPayment,CASpayment,PaymentOptionsContainer} from './indoor-styles';
import CustomButton from "../../CustomButtons/Button";
import FormInput from '../../form-input/form-input';
import Logo from '../../../assets/img/logo1.png';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart-actions';
import StripeCheckoutButton from '../../stripe-button/stripe-button';
import SignIn from '../../sign-in/sign-in';


class Indoor extends React.Component {  
    constructor(props){
        super(props);   
        this.state = {
            customerName: '',
            email: '',
            phoneNumber: '',
            subject: '',
            address: '',
            comments: '',
            selectValue: '',
            error: '',
            data: new FormData(),
            option: false,
            option2: false,
            HowOften: '',
            dateTime: "" + this.props.dateTime,
            IndoorCardPayment: false,
            IndoorCashPayment: false,
            spinner: false,
            item : 
            {
                id:'',
                customerName: '',
                email: '',
                phoneNumber: '',
                address: '',
                bookingDate : new Date(),
                category: '',
                service : '',
                serviceDate : new Date(),
                comments : '',
                homeDetails : '',
                frequency: '',
                payment: '',
                total: ""
            }
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.CreditCardPayment= this.CreditCardPayment.bind(this);
        this.CashAfterServicePayment= this.CashAfterServicePayment.bind(this);
    }


    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
      }

      CashAfterServicePayment(event) {
        this.setState({
            IndoorCashPayment: this.state.IndoorCardPayment === true? false : !this.state.IndoorCashPayment
        });
      }

      CreditCardPayment(event) {
        const {customerName, email, phoneNumber,address,comments,dateTime} = this.state;
        const {currentUser} = this.props;
        const name = this.props.currentUser? currentUser.displayName : customerName;
        const emailAd = this.props.currentUser? currentUser.email : email;
        const min = 1;
        const max = 1000;
        const random = min + (Math.random() * (max - min));
        const service = this.props.IndoorDetergents ? this.props.IndoorBookedService + " with Detergents" : this.props.IndoorBookedService;
        const payment = "ONLINE";
        this.setState({
            CardPayment: this.state.CashPayment === true ? false : !this.state.CardPayment,
            item : 
            {
              id: Math.ceil(random) + "IN",
              customerName : name,
              email : emailAd,
              phoneNumber : phoneNumber,
              address : address,
              comments : comments,
              bookingDate : new Date(),
              category : "Indoor Services",
              service : service,
              homeDetails : "Bedrooms : " + this.props.bedRooms + "; Bathrooms : " + this.props.bathRooms + "; Extras : " + this.props.IndoorExtras,
              serviceDate : dateTime.replace("GMT+0200 (South Africa Standard Time)",""),
              frequency: this.props.serviceIntervalIndoor,
              payment: payment,
              total :  this.props.totalIndoor
            }
        });
      }


      handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const {dateTime} = this.state;
        const min = 1;
        const max = 1000;
        const random = min + (Math.random() * (max - min));
        const service = this.props.IndoorDetergents ? this.props.IndoorBookedService + " with Detergents" : this.props.IndoorBookedService;
        const payment = "CAS";
        this.setState({
            spinner: true,
            item : 
                {
                    id: Math.ceil(random) + "IN",
                    customerName : data.get('customerName'),
                    email : data.get('email'),
                    phoneNumber : data.get('phoneNumber'),
                    address : data.get('address'),
                    comments : data.get('comments'),
                    bookingDate : new Date(),
                    category : "Indoor Services",
                    service : service,
                    homeDetails : "Bedrooms : " + this.props.bedRooms + "; Bathrooms : " + this.props.bathRooms + "; Extras : " + this.props.IndoorExtras,
                    serviceDate : dateTime.replace("GMT+0200 (South Africa Standard Time)",""),
                    frequency: this.props.serviceIntervalIndoor,
                    payment: payment,
                    total :  this.props.totalIndoor
                }
               
        });
       fetch('/email', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "email" : data.get('email'),
          "customerName" : data.get('customerName'),
          "phoneNumber": data.get('phoneNumber'),
          "subject": "Indoor Services",
          "comments": data.get('comments'),
          "address": data.get('address'),
          "natureOfServices": service,
          "serviceIntervals": this.props.serviceIntervalIndoor, // + "," + this.state.serviceIntervalIndoorSanitise,
          "extraServices": "Bedrooms : " + this.props.bedRooms + "; Bathrooms : " + this.props.bathRooms + "; Extras : " + this.props.IndoorExtras,
          "date": dateTime.replace("GMT+0200 (South Africa Standard Time)",""),
          "costs": "R " + this.props.totalIndoor
        })

          }).then((response) => {
            this.setState({ response: response.status, spinner : false });
            console.log('Success:', response.status);
            this.props.addItem(this.state.item);
          })
          .catch((error) => {
            this.setState({ error: error });
            console.error('Error:', error);
          });
    }
    
    handleChange2 = (event) => {
        this.logs.shift()
        this.logs.unshift("" + event.target.value);

        this.setState({
            value: event.target.value,
            events: this.logs.slice()
        });
    }

    handleChange = event => { //destructure off of the event
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    showPopupSignIn(event) {
        this.setState({
            showPopupSignIn: !this.state.showPopupSignIn
        });
      }
//https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/integration-with-json/
  render() {  

    const {customerName, email, phoneNumber,address,comments,response,error,item,spinner} = this.state;
    const {currentUser} = this.props;

        return (  
            <Popup>  
                <PopupInner>                   
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closePopup} >&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />
                        <Title> Enter Contact Details
                        </Title>
                        
                                <Form className = 'COD-form' onSubmit = {this.handleSubmit}> 
                                <Details> 
                                    <div style = {{"margin-left": "10%", width: "80%"}}>   
                                    {this.props.currentUser?
                                        <div>
                                            <FormInput type = 'text' name = 'customerName' value = {currentUser.displayName}  label = 'Name & Surname' required/>
                                            <FormInput type = 'email' name = 'email' value = {currentUser.email}  label = 'Email Address' required/>
                                        </div>
                                        :
                                        <div>
                                            <FormInput type = 'text' name = 'customerName' value = {customerName} onChange = {this.handleChange} label = 'Name & Surname' required/>
                                            <FormInput type = 'email' name = 'email' value = {email} onChange = {this.handleChange} label = 'Email Address' required/>
                                        </div>                                       
                                    }          
                                        <FormInput type = 'tel' name = 'phoneNumber' value = {phoneNumber} onChange = {this.handleChange} label = 'Phone Number' required/>                           
                                        <FormInput type = 'text' name = 'address' value = {address} onChange = {this.handleChange} label = 'Physical address' rows="4" required/>                                                
                                        <FormInput type = 'text' name = 'comments' value = {comments} onChange = {this.handleChange} label = 'Comments'/>                                                                                                             
                                    </div>   
                                    <Right >
                                        <div style={{marginBottom:"20px"}}>
                                            <ContentTitle> Nature of Services </ContentTitle>                                
                                            <Message4>Indoors</Message4>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Home Details </ContentTitle>                                   
                                            <Message4>{this.props.bedRooms}</Message4>
                                            <Message4>{this.props.bathRooms}</Message4>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Required Services </ContentTitle>    
                                        {
                                            this.props.IndoorDetergents ?
                                            <Message4>{this.props.IndoorBookedService + " with Detergents" }</Message4>

                                            : <Message4>{this.props.IndoorBookedService  }</Message4>

                                        }                               
                                            
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Extra Services </ContentTitle> 
                                        <Message4>{this.props.IndoorExtras}</Message4> 
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Services Intervals</ContentTitle> 
                                            <Message4>{this.props.serviceIntervalIndoor}</Message4>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Date </ContentTitle>                                    
                                            <Message4>{this.state.dateTime.replace("GMT+0200 (South Africa Standard Time)","")}</Message4>
                                        </div>  
                                        <ContentTitle> Total Costs </ContentTitle>                                    
                                            <Message4> R { this.state.CashPayment?
                                                this.props.totalIndoor
                                                :
                                                this.props.totalIndoor
                                                }</Message4>
                                    </Right>  
                                    </Details> 

                                    <Title> PAYMENT METHODS </Title>
                                    <PaymentOptionsContainer>
                                        <PayGridSplit><Fab><CASpayment onClick = {this.CashAfterServicePayment.bind(this)} IndoorCashPayment = {this.state.IndoorCashPayment}/></Fab><PayOptions>CAS (Cash After Service)</PayOptions></PayGridSplit>
                                        <PayGridSplit><Fab><CreditCardPayment onClick = {this.CreditCardPayment.bind(this)} IndoorCardPayment = {this.state.IndoorCardPayment}/></Fab><PayOptions>Online Payment</PayOptions></PayGridSplit>
                                    </PaymentOptionsContainer>
                                     
                                    {   this.state.IndoorCashPayment ?

                                            response === 200  ? 
                                            <div>
                                                <Response>Email Sent!!!!</Response>
                                                <p style = {{"textAlign" : "center"}}><CustomButton onClick={this.props.closePopup}  style = {{"margin-top" : "10px", "background": "#e91e63"}} size="sm">CLOSE</CustomButton></p> 

                                            </div>
                                            : response === 500 || response === 404 ?
                                                <div>
                                                    <Errors>Email Not Sent!!!!</Errors>
                                                    <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  style = {{"margin-top" : "10px", "background": "#e91e63"}} size="sm">RESEND</CustomButton></p> 
                                                </div>
                                                :   spinner? <p style = {{"textAlign" : "center"}}><CustomButton  style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">Loading...</CustomButton></p>  
    
                                                :   <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit'  style = {{"margin-top" : "10px", "background": "#e91e63"}} size="sm">BOOK SERVICE</CustomButton></p>                                    
                                        : null
                                    } 
                                    </Form>    
                                    {this.state.CardPayment ?
                                        this.props.currentUser?
                                        <StripeCheckoutButton item = {this.state.item}/>
                                         : !this.props.currentUser?   
                                         <p style = {{"textAlign" : "center"}}><CustomButton  onClick = {this.showPopupSignIn.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Sign In</CustomButton></p> 
                                        : null
                                    : null
                                    }

                                    {this.state.showPopupSignIn ?
                                        <SignIn showPopupSignIn = {this.state.showPopupSignIn} closePopupSignIn = {this.showPopupSignIn.bind(this)}/>
                                    : null
                                    } 
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(Indoor);

/*                                            <Message4>{this.props.genIndoorCleanWallsService}</Message4>
                                            <Message4>{this.props.genIndoorCleanWindowsService}</Message4>
                                            <Message4>{this.props.genIndoorCleanLaundryService}</Message4>
                                            <Message4>{this.props.afterBuildIndoorCleanWallsService}</Message4>
                                            <Message4>{this.props.afterBuildIndoorCleanWindowsService}</Message4>
                                            <Message4>{this.props.endTenancyIndoorCleanWallsService}</Message4>
                                            <Message4>{this.props.endTenancyIndoorCleanWindowsService}</Message4>*/



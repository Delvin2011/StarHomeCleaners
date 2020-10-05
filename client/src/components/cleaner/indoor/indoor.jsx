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
            item : 
            {
              id:'',
              bookingDate : new Date(),
              category: '',
              service : '',
              serviceDate : new Date(),
              frequency: '',
              payment: ''
            }
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.CreditCardPayment= this.CreditCardPayment.bind(this);
        this.CashAfterServicePayment= this.CashAfterServicePayment.bind(this);

        this.closePop= this.props.closePopup;

        //this.Demo.simpleCart = this.Demo.simpleCart.bind(this);
    }


    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
      }


      closePop(e) {
        console.log(e)
      }


      CreditCardPayment(event) {
        this.setState({
            IndoorCardPayment: this.state.IndoorCashPayment === true ? false : !this.state.IndoorCardPayment
        });
      }
  
      CashAfterServicePayment(event) {
        this.setState({
            IndoorCashPayment: this.state.IndoorCardPayment === true? false : !this.state.IndoorCashPayment
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
        const payment = this.state.IndoorCashPayment ? "CAS" : this.state.IndoorCardPayment ? "ONLINE" : "";
        this.setState({
            item : 
                {
                  id: Math.ceil(random) + "IN",
                  bookingDate : new Date(),
                  category : 'Indoor',
                  service : service, 
                  serviceDate : dateTime.replace("GMT+0200 (South Africa Standard Time)",""),
                  frequency: this.props.serviceIntervalIndoor,
                  payment: payment
                }
               
        });
       fetch('/email', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "email" : data.get('email'),
          "customerName" : data.get('customerName'),
          "phoneNumber": data.get('phoneNumber'),
          "subject": "Indoors Cleaning Services",
          "comments": data.get('comments'),
          "address": data.get('address'),
          "natureOfServices": "Indoors",
          "homeDetails": this.props.bedRooms + " and " + this.props.bathRooms,
          "requiredServices": service,//this.props.IndoorCleanService + ", " + this.props.IndoorAfterBuildCleanService + ", " + this.props.IndoorEndTenancyCleanService + ", " + this.props.IndoorSanitiseService,
          "serviceIntervals": this.props.serviceIntervalIndoor, // + "," + this.state.serviceIntervalIndoorSanitise,
          "extraServices": this.props.genIndoorCleanWallsService + ", " + this.props.genIndoorCleanWindowsService + ", " + this.props.genIndoorCleanLaundryService + ", " + this.props.afterBuildIndoorCleanWallsService + ", " + this.props.afterBuildIndoorCleanWindowsService + ", " + this.props.endTenancyIndoorCleanWallsService + ", " + this.props.endTenancyIndoorCleanWindowsService,
          "date": dateTime.replace("GMT+0200 (South Africa Standard Time)",""),
          "costs": "R " + this.props.totalIndoor
        })

          }).then((response) => {
            this.setState({ response: response.status });
            console.log('Success:', response.status);
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

//https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/integration-with-json/
  render() {  

    const {customerName, email, phoneNumber,address,comments,response,error,item} = this.state;
    const {currentUser} = this.props;
    const {service} = "Indoors Cleaning Services";
    //console.log(this.props.bedRooms);
    //console.log(this.props.bathRooms);
        return (  
            <Popup>  
                <PopupInner>                   
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.closePop.bind(this)} >&#10005;</CloseButton>  
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
                                            <Message4>{this.props.genIndoorCleanWallsService}</Message4>
                                            <Message4>{this.props.genIndoorCleanWindowsService}</Message4>
                                            <Message4>{this.props.genIndoorCleanLaundryService}</Message4>
                                            <Message4>{this.props.afterBuildIndoorCleanWallsService}</Message4>
                                            <Message4>{this.props.afterBuildIndoorCleanWindowsService}</Message4>
                                            <Message4>{this.props.endTenancyIndoorCleanWallsService}</Message4>
                                            <Message4>{this.props.endTenancyIndoorCleanWindowsService}</Message4>
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
                                        <PayGridSplit><Fab><CreditCardPayment onClick = {this.CreditCardPayment.bind(this)} IndoorCardPayment = {this.state.IndoorCardPayment}/></Fab><PayOptions>Online Payment (Coming Soon)</PayOptions></PayGridSplit>
                                    </PaymentOptionsContainer>
                                     
                                    {   this.state.IndoorCashPayment ?

                                            response === 200  ? 
                                            <div>
                                                <Response>Email Sent!!!!</Response>
                                                <p style = {{"textAlign" : "center"}}><CustomButton onClick={() => {this.props.addItem(item);this.closePop.bind(this)}}  style = {{"margin-top" : "10px", "background": "#e91e63"}} size="sm">CLOSE</CustomButton></p> 

                                            </div>
                                            : response === 500 || response === 404 ?
                                                <div>
                                                    <Errors>Email Not Sent!!!!</Errors>
                                                    <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  style = {{"margin-top" : "10px", "background": "#e91e63"}} size="sm">RESEND</CustomButton></p> 

                                                </div>
                                                :    <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit'  style = {{"margin-top" : "10px", "background": "#e91e63"}} size="sm">BOOK SERVICE</CustomButton></p>                                    
                                        : null
                                    } 
                                    </Form>    
                                    {/*this.state.IndoorCardPayment ?
                                        <StripeCheckoutButton service = {service} price = {this.props.totalIndoor}/>
                                            : null*/
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





import React from 'react';  
import {Popup,PopupInner,Form,LogoContainer,CloseButton,Response,Errors,Message4,Details,Right,ContentTitle,Title,PayGridSplit,PayOptions,CreditCardPayment,CASpayment,PaymentOptionsContainer} from '../outdoor/outdoor-styles'; 
import CustomButton from "../../CustomButtons/Button";
import FormInput from '../../form-input/form-input';
import Logo from '../../../assets/img/logo1.png';
import StripeCheckoutButton from '../../stripe-button/stripe-button';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart-actions';
import Tooltip from '@material-ui/core/Tooltip';
import SignIn from '../../sign-in/sign-in';
import {withRouter} from 'react-router-dom';
class Pool extends React.Component {  
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
            dateTimePool: "" + this.props.dateTimePool,
            response: '',
            CardPayment: false,
            CashPayment: false,
            showPopupSignIn: false,
            spinner: false,
            item : 
                {
                  id:'',
                  customerName: '',
                  email: '',
                  phoneNumber: '',
                  bookingDate : new Date(),
                  category: '',
                  service : '',
                  serviceDate : new Date(),
                  comments : '',
                  poolDimensions : '',
                  frequency: '',
                  payment: '',
                  total: ""
                }
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);

        this.CreditCardPayment= this.CreditCardPayment.bind(this);
        this.CashAfterServicePayment= this.CashAfterServicePayment.bind(this);
        //this.closePop= 
        this.closePop= this.props.closePopup;
    }
    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
      }

      closePop = () => {
        //console.log(e)
      }

      CreditCardPayment(event) {
        const {customerName, email, phoneNumber,address,comments,dateTimePool} = this.state;
        const {currentUser} = this.props;
        const name = this.props.currentUser? currentUser.displayName : customerName;
        const emailAd = this.props.currentUser? currentUser.email : email;
        const min = 1;
        const max = 1000;
        const random = min + (Math.random() * (max - min));
        const service = this.props.poolRequiredService;//this.props.poolCleaning? this.props.poolCleaning : this.props.poolMaintanence? this.props.poolMaintanence : "";
        const payment = "ONLINE";
        this.setState({
            CardPayment: this.state.CashPayment === true ? false : !this.state.CardPayment,
            item : 
            {
              id: Math.ceil(random) + "PL",
              customerName : name,
              email : emailAd,
              phoneNumber : phoneNumber,
              address : address,
              comments : comments,
              bookingDate : new Date(),
              category : "Pool Services",
              service : service,
              poolDimensions : "Shape : " + this.props.poolShape + "; Volume : " + this.props.poolVolume + "; Issues : " + this.props.poolIssue,
              serviceDate : dateTimePool.replace("GMT+0200 (South Africa Standard Time)",""),
              frequency: this.props.serviceInterval,
              payment: payment,
              total :  this.props.totalPool
            }
        });
      }
  
      CashAfterServicePayment(event) {
        this.setState({
            CashPayment: this.state.CardPayment === true? false : !this.state.CashPayment
        });
      }

      //Form to select date and time.
      handleSubmit1(event) {
        event.preventDefault();
        const form = event.target;
        this.setState({ data: new FormData(form) });
      }


      handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const {dateTimePool} = this.state;
        const min = 1;
        const max = 1000;
        const random = min + (Math.random() * (max - min));
        const service = this.props.poolRequiredService;//this.props.poolCleaning? this.props.poolCleaning : this.props.poolMaintanence? this.props.poolMaintanence : "";
        const payment = "CAS";
        this.setState({
            spinner: true,
            item : 
                {
                  id: Math.ceil(random) + "PL",
                  customerName : data.get('customerName'),
                  email : data.get('email'),
                  phoneNumber : data.get('phoneNumber'),
                  address : data.get('address'),
                  comments : data.get('comments'),
                  bookingDate : new Date(),
                  category : 'Pool Services',
                  service : service,
                  poolDimensions : "Shape : " + this.props.poolShape + "; Volume : " + this.props.poolVolume + "; Issues : " + this.props.poolIssue,
                  serviceDate : dateTimePool.replace("GMT+0200 (South Africa Standard Time)",""),
                  frequency: this.props.serviceInterval,
                  payment: payment,
                  total :  this.props.totalPool
                }
        });

       fetch('/email', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "email" : data.get('email'),
            "customerName" : data.get('customerName'),
            "phoneNumber": data.get('phoneNumber'),
            "subject": "Pool Services",
            "comments": data.get('comments'),
            "address": data.get('address'),
            "natureOfServices": service,
            "extraServices": "Shape : " + this.props.poolShape + "; Volume : " + this.props.poolVolume + "; Issues : " + this.props.poolIssue,
            "serviceIntervals": this.props.serviceInterval,
            "date": dateTimePool.replace("GMT+0200 (South Africa Standard Time)",""),
            "costs": "R " + this.props.totalPool,
            "payment": payment
        })
          })
          //.then((response) => {response.json();console.log(response.ok)})
          .then((response) => {
            this.setState({ response: response.status, spinner : false });
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

    showPopupSignIn(event) {
        this.setState({
            showPopupSignIn: !this.state.showPopupSignIn
        });
      }

//https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/integration-with-json/
  render() {  

    const {customerName, email, phoneNumber,address,comments,response,error,item,spinner} = this.state;
    const {currentUser} = this.props;
    //const {service} = "Pool Cleaning Services";

        return (  
            <Popup>  
                <PopupInner>                   
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.closePop.bind(this)} >&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />   
                        <Title> Enter Contact Details </Title>                                    
                            <Form className = 'COD-form' onSubmit = {this.handleSubmit}>                
                                <Details> 
                                    <div style = {{"margin-left": "10%", width: "80%"}}>             
                                    {this.props.currentUser?
                                        <div>
                                            <FormInput type = 'text' name = 'customerName' value = {currentUser.displayName} label = 'Name & Surname' required/>
                                            <FormInput type = 'email' name = 'email' value = {currentUser.email} label = 'Email Address' required/>
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
                                            <ContentTitle> Nature of Services
                                            </ContentTitle>
                                                <Message4>Pool</Message4>
                                            </div>
                                        <div style={{marginBottom:"20px"}}>    
                                        <ContentTitle> Required Services
                                        </ContentTitle>
                                            <Message4>{this.props.poolRequiredService}</Message4>

                                            </div>
                                        <div style={{marginBottom:"20px"}}>   
                                            <ContentTitle> Services Intervals
                                            </ContentTitle>
                                            <Message4>{this.props.serviceInterval}</Message4>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Pool Details </ContentTitle>
                                            <Message4>Shape : {this.props.poolShape}</Message4>
                                            <Message4>Volume : {this.props.poolVolume.toFixed(0)} l</Message4>
                                            <Message4>Issues : {this.props.poolIssue}</Message4>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Date
                                        </ContentTitle>
                                        <Message4>{this.props.dateTimePool.replace("GMT+0200 (South Africa Standard Time)","")}</Message4>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Total Costs
                                        </ContentTitle>
                                            <Message4> R {this.props.totalPool}</Message4>
                                            </div>
                                    </Right>  
                                 </Details> 
                                 <Title> PAYMENT METHODS </Title>
                                    <PaymentOptionsContainer>
                                        <PayGridSplit><Fab><CASpayment onClick = {this.CashAfterServicePayment.bind(this)} CashPayment = {this.state.CashPayment}/></Fab><PayOptions>CAS (Cash After Service)</PayOptions></PayGridSplit>
                                        <PayGridSplit><Fab><CreditCardPayment onClick = {this.CreditCardPayment.bind(this)} CardPayment = {this.state.CardPayment}/></Fab><PayOptions>Online Payment</PayOptions></PayGridSplit>
                                    </PaymentOptionsContainer>
                                     
                                    {   this.state.CashPayment ?

                                            response === 200  ? 
                                            <div>
                                                <Response>Email Sent!!!!</Response>
                                                <p style = {{"textAlign" : "center"}}><CustomButton  onClick={() => {this.props.addItem(item);this.closePop.bind(this)}} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">CLOSE</CustomButton></p> 

                                            </div>
                                            : response === 500 || response === 404 ?
                                                <div>
                                                    <Errors>Email Not Sent!!!!</Errors>
                                                    <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">RESEND</CustomButton></p> 
                                                </div>
                                                :   spinner? <p style = {{"textAlign" : "center"}}><CustomButton  style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">Loading...</CustomButton></p>  
    

                                                : <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">BOOK SERVICE</CustomButton></p>                                    
                                        
                                        
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


//export default Pool; 
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default withRouter(connect(
    null,
    mapDispatchToProps
  )(Pool));
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
            dateTime: "" + this.props.dateTime,
            response: '',
            CardPayment: false,
            CashPayment: false,
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
        this.handleSubmit1 = this.handleSubmit1.bind(this);

        this.CreditCardPayment= this.CreditCardPayment.bind(this);
        this.CashAfterServicePayment= this.CashAfterServicePayment.bind(this);
        this.closePop= this.props.closePopup;
    }
    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
      }

      closePop(e) {
        console.log(e)
      }
      CreditCardPayment(event) {
        this.setState({
            CardPayment: this.state.CashPayment === true ? false : !this.state.CardPayment
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
        const {dateTime} = this.state;
        const min = 1;
        const max = 1000;
        const random = min + (Math.random() * (max - min));
        const service = this.props.poolCleaning? this.props.poolCleaning : this.props.poolMaintanence? this.props.poolMaintanence : "";
        const payment = this.state.CashPayment ? "CAS" : this.state.CardPayment ? "ONLINE" : "";
        this.setState({
            item : 
                {
                  id: Math.ceil(random) + "PL",
                  bookingDate : new Date(),
                  category : 'Pool',
                  service : service,
                  serviceDate : dateTime.replace("GMT+0200 (South Africa Standard Time)",""),
                  frequency: this.props.serviceInterval,
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
            "subject": "Pool Services",
            "comments": data.get('comments'),
            "address": data.get('address'),
            "natureOfServices": "Pool",
            "timeAllocation": this.props.time + " hrs",
            "serviceIntervals": this.props.serviceInterval,
            "extraServices": service,
            "date": dateTime.replace("GMT+0200 (South Africa Standard Time)",""),
            "costs": "R " + this.props.total
        })
          })
          //.then((response) => {response.json();console.log(response.ok)})
          .then((response) => {
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
    const {service} = "Pool Cleaning Services";
    console.log(item);
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
                                            <Message4>{this.props.poolCleaning}</Message4>
                                            <Message4>{this.props.poolMaintanence}</Message4>
                                            </div>
                                        <div style={{marginBottom:"20px"}}>   
                                            <ContentTitle> Services Intervals
                                            </ContentTitle>
                                            <Message4>{this.props.serviceInterval}</Message4>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Time allocation
                                        </ContentTitle>
                                            <Message4>{this.props.time} hrs</Message4>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Date
                                        </ContentTitle>
                                        <Message4>{this.state.dateTime.replace("GMT+0200 (South Africa Standard Time)","")}</Message4>
                                        </div>
                                        <div style={{marginBottom:"20px"}}>
                                        <ContentTitle> Total Costs
                                        </ContentTitle>
                                            <Message4> R {this.props.total?
                                                this.props.total.toFixed(2)
                                                : null
                                                }</Message4>
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
                                                :    <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">BOOK SERVICE</CustomButton></p>                                    
                                        : null
                                    } 
                                    </Form>    
                                    {this.state.CardPayment ?
                                        <StripeCheckoutButton service = {service} price = {this.props.totalIndoor} item = {this.state.item}/>
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
  
  export default connect(
    null,
    mapDispatchToProps
  )(Pool);
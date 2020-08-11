import React from 'react';  
import {Popup,PopupInner,Form,LogoContainer,CloseButton,Response,Errors,Message4,Details,Right,ContentTitle,Title} from '../outdoor/outdoor-styles'; 
import CustomButton from "../../CustomButtons/Button";
import FormInput from '../../form-input/form-input';
import Logo from '../../../assets/img/logo1.png';
//import { Form } from "react-bootstrap";

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
            response: ''
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }
    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
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
            "extraServices": this.props.poolCleaning + ", " + this.props.poolMaintanence,
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

    const {customerName, email, phoneNumber,address,comments,response,error} = this.state;
    const {currentUser} = this.props;
        return (  
            <Popup>  
                <PopupInner>                   
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closePopup} >&#10005;</CloseButton>  
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
                                        <ContentTitle> Nature of Services
                                        </ContentTitle>
                                            <Message4>Pool</Message4>
                                        <ContentTitle> Required Services
                                        </ContentTitle>
                                            <Message4>{this.props.poolCleaning}</Message4>
                                            <Message4>{this.props.poolMaintanence}</Message4>
                                            <ContentTitle> Services Intervals
                                        </ContentTitle>
                                        <Message4>{this.props.serviceInterval}</Message4>
                                        <ContentTitle> Time allocation
                                        </ContentTitle>
                                            <Message4>{this.props.time} hrs</Message4>
                                        <ContentTitle> Date
                                        </ContentTitle>
                                        <Message4>{this.state.dateTime.replace("GMT+0200 (South Africa Standard Time)","")}</Message4>
                                        <ContentTitle> Total Costs
                                        </ContentTitle>
                                            <Message4> R {this.props.total.toFixed(2)}</Message4>
                                    </Right>  
                                 </Details> 
                                    {response === 200 ? 
                                        <div>
                                            <Response>Email Sent!!!!</Response>
                                            <p style = {{"textAlign" : "center"}}><CustomButton onClick= {this.props.closePopup} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>CLOSE</CustomButton></p> 

                                        </div>
                                    : response === 500 || response === 404 ?
                                        <div>
                                            <Errors>Email Not Sent!!!!</Errors> 
                                            <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>RESEND</CustomButton></p>
                                        </div>
                                        : <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>BOOK SERVICE</CustomButton></p>

                                    } 
                                </Form>                             
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


export default Pool; 

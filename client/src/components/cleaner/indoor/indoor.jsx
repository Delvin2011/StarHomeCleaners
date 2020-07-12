import React from 'react';  
import {Popup,PopupInner,LogoContainer,Form,CloseButton,Response,Errors,Message4,Details,Right,ContentTitle,Title} from '../outdoor/outdoor-styles'; 
import CustomButton from "../../CustomButtons/Button";
import FormInput from '../../form-input/form-input';
import Logo from '../../../assets/img/logo1.png';
//import { Form } from "react-bootstrap";

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
            dateTime: "" + this.props.dateTime
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleSubmit1 = this.handleSubmit1.bind(this);
    }
    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
      }

      handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const {dateTime} = this.state;
        console.log(data.get('email'));
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
          "extraServices": this.props.wall + ", " + this.props.windows + ", " + this.props.machine + ", " + this.props.stove + ", " + this.props.wardrobe + ", " + this.props.fridge,
          "date": dateTime.replace("GMT+0200 (South Africa Standard Time)",""),
          "costs": "R " + this.props.total
        })

          })
          .then((response) => {response.json();console.log(response)}
          )
          .then((result) => {
            this.setState({ response: result.message });
            console.log('Success:', result.message);
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
    console.log(response);
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
                                        <FormInput type = 'text' name = 'customerName' value = {customerName} onChange = {this.handleChange} label = 'Customer Name & Surname' required/>
                                        <FormInput type = 'email' name = 'email' value = {email} onChange = {this.handleChange} label = 'Email Address' required/>
                                        <FormInput type = 'tel' name = 'phoneNumber' value = {phoneNumber} onChange = {this.handleChange} label = 'Phone Number' required/>                           
                                        <FormInput type = 'text' name = 'address' value = {address} onChange = {this.handleChange} label = 'Physical address' rows="4" required/>                                                
                                        <FormInput type = 'text' name = 'comments' value = {comments} onChange = {this.handleChange} label = 'Comments'/>                                                                                                             
                                    </div>   
                                    <Right >
                                        <ContentTitle> Nature of Services </ContentTitle>                                
                                            <Message4>Indoors</Message4>
                                        <ContentTitle> Home Details </ContentTitle>                                   
                                            <Message4>{this.props.bedRooms}</Message4>
                                            <Message4>{this.props.bathRooms}</Message4>
                                        <ContentTitle> Extra Services </ContentTitle>                                   
                                            <Message4>{this.props.wall}</Message4>
                                            <Message4>{this.props.windows}</Message4>
                                            <Message4>{this.props.machine}</Message4>
                                            <Message4>{this.props.stove}</Message4>
                                            <Message4>{this.props.wardrobe}</Message4>
                                            <Message4>{this.props.fridge}</Message4>
                                        <ContentTitle> Date </ContentTitle>                                    
                                            <Message4>{this.state.dateTime.replace("GMT+0200 (South Africa Standard Time)","")}</Message4>
                                        <ContentTitle> Total Costs </ContentTitle>                                    
                                            <Message4> R {this.props.total}</Message4>
                                    </Right>  

                                    </Details> 
                                    {response ? 
                                        <div>
                                            <Response>{response}</Response>
                                            <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit' onClick= {this.props.closePopup} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>CLOSE</CustomButton></p> 

                                        </div>
                                        : error ?
                                            <div>
                                                <Errors>Email Not Sent!!!!</Errors>
                                                <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit' onClick= {this.handleSubmit} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>RESEND</CustomButton></p> 

                                            </div>
                                            :    <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>BOOK SERVICE</CustomButton></p> 

                                    } 

                                 </Form> 

                       
                       
                              
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


export default Indoor;

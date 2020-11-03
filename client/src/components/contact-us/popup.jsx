import React from 'react';  
import {Popup,PopupInner,Form,LogoContainer,CloseButton,SignInNotifier,Response,Errors} from './popup-styles';
import FormInput from "../form-input/form-input";
import CustomButton from "../CustomButtons/Button";
import Logo from '../../assets/img/logo1.png';

class ContactUs extends React.Component {  
    constructor(){
        super();   
        this.state = {
            customerName: '',
            email: '',
            phoneNumber: '',
            subject: '',
            comments: '',
            response: '',
            error: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        this.setState({ redirectToReferrer: true });

       fetch('/email', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "email" : data.get('email'),
          "customerName" : data.get('customerName'),
          "phoneNumber": data.get('phoneNumber'),
          "subject": data.get('subject'),
          "comments": data.get('comments')
        })
          })
          //.then((response) => response.json())
          .then((response) => {
            this.setState({ response: response.status });
            console.log('Success:', response.status);
          })
          .catch((error) => {
            this.setState({ error: error });
            console.error('Error:', error);
          });         
    }
    handleChange = event => { //destructure off of the event
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

//<LogoContainer src={LogoSrc}/> 
  render() {  
    const {customerName, email, phoneNumber,comments,subject,response,error} = this.state;
    const {currentUser} = this.props;
        return (  
            <Popup>  
                <PopupInner> 
                                  
                    {    this.props.showPopup? 
                    <div>
                        <CloseButton className = 'remove-button' onClick = {this.props.closePopup} style = {{color : "black"}}>&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />
                        <Form className = 'COD-form' onSubmit = {this.handleSubmit}>   
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
                            <FormInput type = 'text' name = 'subject' value = {subject} onChange = {this.handleChange} label = 'Subject' required/>                            
                            <FormInput type = 'text' name = 'comments' value = {comments} onChange = {this.handleChange} label = 'Comments' rows="4" required/>
                            {response === 200 ? 
                                        <div>
                                            <Response>Email Sent!!!!</Response>
                                            <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  onClick = {this.props.closePopup} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>CLOSE</CustomButton></p> 
                                        </div>
                                        : response === 500 || response === 404 ?
                                            <div>
                                                <Errors>Email Not Sent!!!!</Errors>
                                                <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>RESEND</CustomButton></p>  
                                            </div>
                                            : <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>SEND</CustomButton></p> 
                            }
                                                                             
                        </Form>
                    </div> 
                    : this.props.showPopupPhone?
                        <div>
                            <CloseButton className = 'remove-button' onClick = {this.props.closePopupPhone} style = {{color : "black"}}>&#10005;</CloseButton> 
                            <LogoContainer src={Logo}/>
                            <SignInNotifier style = {{color : "#4a4a4a"}}>
                                <br></br>
                                <br></br>
                                <h2 style = {{color : "#4a4a4a"}}>Contact us on:</h2>
                                <h4 style = {{color : "#4a4a4a"}}>010 085 0643</h4>
                                <br></br>
                                <br></br>
                                <h2 style = {{color : "#4a4a4a"}}>Alternatively:</h2>
                                <h4 style = {{color : "#4a4a4a"}}>064 046 1900</h4>
                                <br></br>
                                <br></br>
                                <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit' onClick={this.props.closePopupPhone} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>CLOSE</CustomButton></p>
                            </SignInNotifier>
                        </div>
                        : this.props.showPopupGetQuote?
                        <div>
                            <CloseButton className = 'remove-button' onClick = {this.props.closePopupGetQuote} style = {{color : "black"}}>&#10005;</CloseButton>  
                            <LogoContainer src= {Logo} />
                            <Form className = 'COD-form' onSubmit = {this.handleSubmit}>   
                                <FormInput type = 'text' name = 'customerName' value = {customerName} onChange = {this.handleChange} label = 'Customer Name' required/>                                          
                                <FormInput type = 'email' name = 'email' value = {email} onChange = {this.handleChange} label = 'Email Address' required/>
                                <FormInput type = 'tel' name = 'phoneNumber' value = {phoneNumber} onChange = {this.handleChange} label = 'Phone Number' required/>
                                {response ? 
                                            <div>
                                                <Response>{response}</Response>
                                                <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  onClick = {this.props.closePopupGetQuote} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>CLOSE</CustomButton></p>
                                            </div>
                                            : error ?
                                                <div>
                                                    <Errors>Email Not Sent!!!!</Errors>
                                                    <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>RESEND</CustomButton></p>  
                                                </div>
                                                : <p style = {{"textAlign" : "center"}}><CustomButton type = 'submit'  style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>SEND</CustomButton></p>
 
                                }
                                                                    
                            </Form>
                        </div>

                        : null
                        }
                </PopupInner>  
            </Popup>  
        );  
    }  
}  

export default ContactUs;
//<LogoContainer src={LogoSrc}/>  

/*          <section className="section">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Ecommerce Platforms</h1>
                      <h5 className="text-on-back">03</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input defaultValue="Mike" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                placeholder="mike@email.com"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input defaultValue="001-12321345" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Company</label>
                              <Input defaultValue="CreativeTim" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder="Hello there!" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button"
                        >
                          Send text
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto" md="4">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at the office</h4>
                      <p>
                        Bld Mihail Kogalniceanu, nr. 8, <br />
                        7652 Bucharest, <br />
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        Michael Jordan <br />
                        +40 762 321 762 <br />
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>*/
import React from 'react';  
import {Popup,PopupInner,Form,Button,LogoContainer,CloseButton,SignInNotifier,Response,Errors} from './popup-styles'; 
import FormInput from "../form-input/form-input";

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
          .then((response) => response.json())
          .then((result) => {
            this.setState({ response: result.message });
            console.log('Success:', result.message);
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
        return (  
            <Popup>  
                <PopupInner> 
                                  
                    {    this.props.showPopup? 
                    <div>
                        <CloseButton className = 'remove-button' onClick = {this.props.closePopup} style = {{color : "black"}}>&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />
                        <Form className = 'COD-form' onSubmit = {this.handleSubmit}>   
                            <FormInput type = 'text' name = 'customerName' value = {customerName} onChange = {this.handleChange} label = 'Customer Name' required/>                                          
                            <FormInput type = 'email' name = 'email' value = {email} onChange = {this.handleChange} label = 'Email Address' required/>
                            <FormInput type = 'tel' name = 'phoneNumber' value = {phoneNumber} onChange = {this.handleChange} label = 'Phone Number' required/>
                            <FormInput type = 'text' name = 'subject' value = {subject} onChange = {this.handleChange} label = 'Subject' required/>                            
                            <FormInput type = 'text' name = 'comments' value = {comments} onChange = {this.handleChange} label = 'Comments' rows="4" required/>
                            {response ? 
                                        <div>
                                            <Response>{response}</Response>
                                            <Button onClick = {this.props.closePopup}> CLOSE</Button> 
                                        </div>
                                        : error ?
                                            <div>
                                                <Errors>Email Not Sent!!!!</Errors>
                                                <Button type = 'submit'> RESEND</Button>  
                                            </div>
                                            : <Button type = 'submit'> SEND</Button> 
                            }
                                                                             
                        </Form>
                    </div> 
                    : this.props.showPopupPhone?
                        <div>
                            <CloseButton className = 'remove-button' onClick = {this.props.closePopupPhone} style = {{color : "black"}}>&#10005;</CloseButton> 
                            <LogoContainer src={Logo}/>
                            <SignInNotifier style = {{color : "black"}}>
                                <br></br>
                                <br></br>
                                <h2 style = {{color : "black"}}>Please contact us on:</h2>
                                <h4 style = {{color : "black"}}>+27 78 724 3693</h4>
                                <br></br>
                                <br></br>
                                <h2 style = {{color : "black"}}>Alternatively:</h2>
                                <h4 style = {{color : "black"}}>+27 83 765 6895</h4>
                                <br></br>
                                <br></br>
                                <Button type = 'submit' onClick={this.props.closePopupPhone}> Close</Button> 
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
                                                <Button onClick = {this.props.closePopupGetQuote}> CLOSE</Button> 
                                            </div>
                                            : error ?
                                                <div>
                                                    <Errors>Email Not Sent!!!!</Errors>
                                                    <Button type = 'submit'> RESEND</Button>  
                                                </div>
                                                : <Button type = 'submit'> SEND</Button> 
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
import React from 'react';  
import {Popup,PopupInner,Form,LogoContainer,CloseButton,SigInButtons,Success,Heading,Errors} from './popupSignIn-styles';  //Button
import FormInput from "../form-input/form-input";
import CustomButton from "../CustomButtons/Button";
import Logo from '../../assets/img/logo1.png';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import SignUp from 'components/sign-up/sign-up';
//import './sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showPopUpSignUp: false,
      error: '',
      success: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ success : "success" });
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
      this.setState({ error: error });
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  showPopUpSignUp(event) {
    this.setState({
      showPopUpSignUp: !this.state.showPopUpSignUp
    });
  }

  render() {
    return (
      <Popup>  
        <PopupInner> 
                        
          { this.props.showPopupSignIn? 
            <div className='sign-in'>
              <CloseButton className = 'remove-button' onClick = {this.props.closePopupSignIn} style = {{color : "black"}}>&#10005;</CloseButton>  
              <LogoContainer src= {Logo} />
              <Heading>Have Account?</Heading>
              <Form onSubmit={this.handleSubmit}>
                <FormInput
                  name='email'
                  type='email'
                  handleChange={this.handleChange}
                  value={this.state.email}
                  label='Email Address'
                  required
                />
                <FormInput
                  name='password'
                  type='password'
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label='Password'
                  required
                />
                {this.state.error?
                  <Errors>Wrong Email or Password!!!</Errors>
                  : this.state.success === "success" || this.props.currentUser?
                    <Success>Successful!!!</Success>
                    : null
                }
                <SigInButtons>
                  <CustomButton type='submit' style = {{"background": "#e91e63"}}> Sign in </CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn style = {{"background": "#e91e63"}}>
                    Sign in with Google
                  </CustomButton>
                </SigInButtons>
              </Form>
            </div>
          : null
          }
          <hr/>
          <Heading>Do not have Account?</Heading>
          <p style = {{"textAlign" : "center"}}><CustomButton onClick = {this.showPopUpSignUp.bind(this)} style = {{"background": "#e91e63"}} > Sign Up </CustomButton></p>
              
              {this.state.showPopUpSignUp?
                <SignUp showPopUpSignUp = {this.state.showPopUpSignUp} closePopUpSignUp = {this.showPopUpSignUp.bind(this)}/>
                  : null
              }
        
        
        
        </PopupInner>  
      </Popup> 
    );
  }
}

export default SignIn;
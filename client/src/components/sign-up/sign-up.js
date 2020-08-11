import React from 'react';
import {Popup,PopupInner,Form,LogoContainer,CloseButton,SigInButtons,SignInNotifier,Heading,Errors,Success} from './popupSignUp-styles';  //Button
import FormInput from "../form-input/form-input";
import CustomButton from "../CustomButtons/Button";
import Logo from '../../assets/img/logo1.png';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      success: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        success : "success"

      });
    } catch (error) {
      console.error(error);
      this.setState({ error: error.message });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <Popup>  
        <PopupInner>            
            <div>
            <CloseButton className = 'remove-button' onClick = {this.props.closePopUpSignUp} style = {{color : "black"}}>&#10005;</CloseButton>  
              <LogoContainer src= {Logo} />
              <Form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={this.handleChange}
                  label='Display Name'
                  required
                />
                <FormInput
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Email Adsress'
                  required
                />
                <FormInput
                  type='password'
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                  label='Password'
                  required
                />
                <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={this.handleChange}
                  label='Confirm Password'
                  required
                />
                {this.state.error?
                  <Errors>{this.state.error}</Errors>
                  : this.state.success === "success"?
                    <Success>Successful!!!</Success>
                    : null
                }
                <p style = {{"textAlign" : "center"}}><CustomButton type='submit' style = {{"background": "#e91e63"}}>SIGN UP</CustomButton></p>
              </Form>
            </div>
            </PopupInner>  
        </Popup>
    );
  }
}

export default SignUp;
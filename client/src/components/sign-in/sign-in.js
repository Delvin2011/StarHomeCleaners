import React from 'react';  
import {Popup,PopupInner,Form,LogoContainer,CloseButton,SigInButtons,Success,Heading,Errors} from './popupSignIn-styles';  //Button
import {connect} from 'react-redux';
import FormInput from "../form-input/form-input";
import CustomButton from "../CustomButtons/Button";
import Logo from '../../assets/img/logo1.png';
import {selectCurrentUser, selectCurrentUserLoginError} from '../../redux/user/user-selectors';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions';
import SignUp from 'components/sign-up/sign-up';
//import './sign-in.scss';
import {createStructuredSelector} from 'reselect'; //bcoz we gonna be pulling stufff off the state

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

    const {emailSignInStart} = this.props; //destructure from props
    const {email, password} = this.state;

    emailSignInStart(email, password);
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
    const {googleSignInStart} = this.props;
    console.log(this.props.currentUser);
    console.log(this.props.error);
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
                {this.props.error?
                  <Errors>Wrong Email or Password!!!</Errors>
                  : this.state.success === "success" || this.props.currentUser?
                    <Success>Successful!!!</Success>
                    : null
                }
                {this.state.success === "success" || this.props.currentUser?
                <p style = {{"textAlign" : "center"}}><CustomButton onClick = {this.props.closePopupSignIn} style = {{"background": "#e91e63"}}> Close </CustomButton></p>
                    :
                    <SigInButtons>
                  <CustomButton type='submit' style = {{"background": "#e91e63"}}> Sign in </CustomButton>
                  <CustomButton onClick={googleSignInStart} style = {{"background": "#e91e63"}}>
                    Sign in with Google
                  </CustomButton>
                </SigInButtons>
                }
              </Form>
            </div>
          : null
          }
          <hr/>
          {this.state.success === "success" || this.props.currentUser?
            null
              :
            <div>
              <Heading>Do not have Account?</Heading>
                  <p style = {{"textAlign" : "center"}}><CustomButton onClick = {this.showPopUpSignUp.bind(this)} style = {{"background": "#e91e63"}} > Sign Up </CustomButton></p>                  
                      {this.state.showPopUpSignUp?
                        <SignUp showPopUpSignUp = {this.state.showPopUpSignUp} closePopUpSignUp = {this.showPopUpSignUp.bind(this)}/>
                          : null
                      }
            </div>
          }
        </PopupInner>  
      </Popup> 
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))

});

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser,
  error : selectCurrentUserLoginError
});



export default connect(mapStateToProps,mapDispatchToProps)(SignIn);

//export default connect (null, mapDispatchToProps)(SignIn);





























/*import React from 'react';  
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
                {this.state.success === "success" || this.props.currentUser?
                <p style = {{"textAlign" : "center"}}><CustomButton onClick = {this.props.closePopupSignIn} style = {{"background": "#e91e63"}}> Close </CustomButton></p>
                    :
                    <SigInButtons>
                  <CustomButton type='submit' style = {{"background": "#e91e63"}}> Sign in </CustomButton>
                  <CustomButton onClick={signInWithGoogle} style = {{"background": "#e91e63"}}>
                    Sign in with Google
                  </CustomButton>
                </SigInButtons>
                }
              </Form>
            </div>
          : null
          }
          <hr/>
          {this.state.success === "success" || this.props.currentUser?
            null
              :
            <div>
              <Heading>Do not have Account?</Heading>
                  <p style = {{"textAlign" : "center"}}><CustomButton onClick = {this.showPopUpSignUp.bind(this)} style = {{"background": "#e91e63"}} > Sign Up </CustomButton></p>                  
                      {this.state.showPopUpSignUp?
                        <SignUp showPopUpSignUp = {this.state.showPopUpSignUp} closePopUpSignUp = {this.showPopUpSignUp.bind(this)}/>
                          : null
                      }
            </div>
          }
        </PopupInner>  
      </Popup> 
    );
  }
}

export default SignIn; */
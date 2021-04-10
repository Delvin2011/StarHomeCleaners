import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import {
  Popup,
  PopupInner,
  Form,
  LogoContainer,
  CloseButton,
  SigInButtons,
  Success,
  Heading,
  Errors,
} from "./popupSignIn-styles"; //Button
import { connect } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../CustomButtons/Button";
import Logo from "../../assets/img/logo1.png";
import {
  selectCurrentUser,
  selectCurrentUserLoginError,
} from "../../redux/user/user-selectors";
import {
  googleSignInStart,
  emailSignInStart,
  signUpStart,
} from "../../redux/user/user-actions";

import "./sign-in.scss";
import { createStructuredSelector } from "reselect"; //bcoz we gonna be pulling stufff off the state

import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import SignUp from "components/sign-up/sign-up";
//import { Modal, Spinner } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

const customStyles = {
  content: {
    top: "100px",
    left: "auto",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    zIndex: "2000",
  },
};

const initialValues = {
  email: "",
  password: "",
};
const initialValuesSignUp = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: "",
  success: "",
};
const SignIn = (props) => {
  const classes = useStyles();
  const {
    showPopupSignIn,
    //showPopupSignUp,
    error,
    currentUser,
    emailSignInStart,
    googleSignInStart,
    closePopupSignIn,
    signUpStart,
  } = props;

  const [values, setValues] = useState(initialValues);
  const [signUpValues, setSignUpValues] = useState(initialValuesSignUp);
  const [spinner, setSpinner] = useState(false);
  const [googleSpinner, setGoogleSpinner] = useState(false);
  const [signingUp, setSignUp] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = values;
    setSpinner(true);
    emailSignInStart(email, password);
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = signUpValues;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    setSpinner(true);
    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleChangeSignUp = (event) => {
    const { name, value } = event.target;
    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const onGoogleSignIn = useCallback(() => {
    googleSignInStart();
  }, []);

  return (
    <PopupInner>
      {!signingUp ? (
        <Card className="bg-secondary shadow border-0">
          <form className={classes.form} onSubmit={handleSubmit}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <div className={classes.socialLine}>
                {!googleSpinner && !currentUser ? (
                  <div>
                    <Heading style={{ color: "white" }}>Sign In With</Heading>
                    <Button
                      className="btn-icon mt-2 mb-2 ml-0"
                      color="primary"
                      onClick={() => {
                        setGoogleSpinner(!googleSpinner);
                        onGoogleSignIn();
                      }}
                    >
                      <span className="btn-inner--icon mr-1">
                        <img alt="..." src={require("assets/img/google.svg")} />
                      </span>
                      <span className="btn-inner--text"> Google</span>
                    </Button>
                  </div>
                ) : googleSpinner && !currentUser ? (
                  <div>
                    <Heading style={{ color: "white" }}>Sign In With</Heading>
                    <svg
                      class="spinner"
                      width="60px"
                      height="60px"
                      viewBox="0 0 66 66"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        class="path"
                        fill="none"
                        stroke-width="6"
                        stroke-linecap="round"
                        cx="33"
                        cy="33"
                        r="30"
                      ></circle>
                    </svg>
                  </div>
                ) : googleSpinner && currentUser ? (
                  <div>
                    <Heading style={{ color: "white" }}>Signed In With</Heading>
                    <Button
                      className="btn-icon mt-2 mb-2 ml-0"
                      color="primary"
                      //onClick={/*() => {
                      // setGoogleSpinner(!googleSpinner);
                      // onGoogleSignIn();
                      //}*/}
                    >
                      <span className="btn-inner--icon mr-1">
                        <img alt="..." src={require("assets/img/google.svg")} />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </Button>
                  </div>
                ) : null}
              </div>
            </CardHeader>
            {currentUser ? (
              <div>
                <CardBody>
                  <Heading>Thank you!!!</Heading>
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Password..."
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChange}
                    name="password"
                    value={values.password}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </CardBody>
                <CardFooter>
                  <Button
                    className="my-2"
                    color="primary"
                    type="button"
                    onClick={closePopupSignIn}
                  >
                    Close
                  </Button>
                </CardFooter>
              </div>
            ) : (
              <div>
                <CardBody>
                  <Heading>Or be Classical?</Heading>
                  <CustomInput
                    labelText="Email..."
                    label="Required"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Password..."
                    label="Required"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChange}
                    name="password"
                    value={values.password}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <div>
                    {spinner && !currentUser ? (
                      error ? (
                        <Button
                          className="my-2"
                          color="primary"
                          type="button"
                          type="submit"
                        >
                          Error : Re-Submit
                        </Button>
                      ) : (
                        <Button className="my-4" color="primary" type="button">
                          Loading...
                        </Button>
                      )
                    ) : (
                      <Button className="my-2" color="primary" type="submit">
                        Sign In
                      </Button>
                    )}
                    <Button
                      className="my-2"
                      color="primary"
                      type="button"
                      onClick={closePopupSignIn}
                    >
                      Close
                    </Button>
                  </div>
                </CardFooter>
                <CardFooter className={classes.cardFooter}>
                  <div className="text-center">
                    <Heading>Don't have account?</Heading>
                    <Button
                      className="my-2"
                      color="primary"
                      type="button"
                      onClick={() => {
                        //onSetCloseSignIn();
                        setSignUp(!signingUp);
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </CardFooter>
              </div>
            )}
          </form>
        </Card>
      ) : signingUp ? (
        <Card className="bg-secondary shadow border-0">
          <form className={classes.form} onSubmit={handleSubmitSignUp}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <div className={classes.socialLine}>
                {!googleSpinner && !currentUser ? (
                  <div>
                    <Heading style={{ color: "white" }}>Sign In With</Heading>
                    <Button
                      className="btn-icon mt-2 mb-2 ml-0"
                      color="primary"
                      onClick={() => {
                        setGoogleSpinner(!googleSpinner);
                        onGoogleSignIn();
                      }}
                    >
                      <span className="btn-inner--icon mr-1">
                        <img alt="..." src={require("assets/img/google.svg")} />
                      </span>
                      <span className="btn-inner--text"> Google</span>
                    </Button>
                  </div>
                ) : googleSpinner && !currentUser ? (
                  <div>
                    <Heading style={{ color: "white" }}>Sign In With</Heading>
                    <svg
                      class="spinner"
                      width="60px"
                      height="60px"
                      viewBox="0 0 66 66"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        class="path"
                        fill="none"
                        stroke-width="6"
                        stroke-linecap="round"
                        cx="33"
                        cy="33"
                        r="30"
                      ></circle>
                    </svg>
                  </div>
                ) : googleSpinner && currentUser ? (
                  <div>
                    <Heading style={{ color: "white" }}>Signed In</Heading>
                    <Button
                      className="btn-icon mt-2 mb-2 ml-0"
                      color="primary"
                      //onClick={/*() => {
                      // setGoogleSpinner(!googleSpinner);
                      // onGoogleSignIn();
                      //}*/}
                    >
                      <span className="btn-inner--icon mr-1">
                        <img alt="..." src={require("assets/img/google.svg")} />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </Button>
                  </div>
                ) : null}
              </div>
            </CardHeader>
            {currentUser ? (
              <div>
                <CardBody>
                  <p className={classes.divider}>Signed Up : Thank you</p>
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChangeSignUp}
                    name="email"
                    value={initialValuesSignUp.email}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Password..."
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChangeSignUp}
                    name="password"
                    value={initialValuesSignUp.password}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </CardBody>
                <CardFooter>
                  <Button
                    className="my-2"
                    color="primary"
                    type="button"
                    onClick={closePopupSignIn}
                  >
                    Close
                  </Button>
                </CardFooter>
              </div>
            ) : (
              <div>
                <CardBody>
                  <Heading>Or be Classical?</Heading>
                  <CustomInput
                    labelText="Name and Surname..."
                    label="Required"
                    id="displayName"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChangeSignUp}
                    name="displayName"
                    value={signUpValues.email}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Email..."
                    label="Required"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChangeSignUp}
                    name="email"
                    value={signUpValues.email}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Password..."
                    label="Required"
                    id="passwords"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChangeSignUp}
                    name="password"
                    value={signUpValues.password}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Confirm Password..."
                    label="Required"
                    id="confirmPassword"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onChange={handleChangeSignUp}
                    name="confirmPassword"
                    value={signUpValues.confirmPassword}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <div className="text-center">
                    {spinner && !currentUser ? (
                      initialValuesSignUp.error ? (
                        <Button className="my-2" color="primary" type="submit">
                          Error : Re-Submit
                        </Button>
                      ) : (
                        <Button className="my-4" color="primary" type="button">
                          Loading...
                        </Button>
                      )
                    ) : (
                      <Button className="my-2" color="primary" type="submit">
                        Sign Up
                      </Button>
                    )}
                    <Button
                      className="my-2"
                      color="primary"
                      type="button"
                      onClick={closePopupSignIn}
                    >
                      Close
                    </Button>
                  </div>
                </CardFooter>
              </div>
            )}
          </form>
        </Card>
      ) : null}
    </PopupInner>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  error: selectCurrentUserLoginError,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  SignIn
); /*

<SignUp
showPopUpSignUp={signingUp}
//closePopUpSignUp={this.showPopUpSignUp.bind(this)}
/>


import React from "react";
import {
  Popup,
  PopupInner,
  Form,
  LogoContainer,
  CloseButton,
  SigInButtons,
  Success,
  Heading,
  Errors,
} from "./popupSignIn-styles"; //Button
import { connect } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../CustomButtons/Button";
import Logo from "../../assets/img/logo1.png";
import {
  selectCurrentUser,
  selectCurrentUserLoginError,
} from "../../redux/user/user-selectors";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-actions";
import SignUp from "components/sign-up/sign-up";
//import './sign-in.scss';
import { createStructuredSelector } from "reselect"; //bcoz we gonna be pulling stufff off the state

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showPopUpSignUp: false,
      error: "",
      success: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { emailSignInStart } = this.props; //destructure from props
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  showPopUpSignUp(event) {
    this.setState({
      showPopUpSignUp: !this.state.showPopUpSignUp,
    });
  }

  render() {
    const { googleSignInStart } = this.props;
    return (
      <Popup>
        <PopupInner>
          {this.props.showPopupSignIn ? (
            <div className="sign-in">
              <CloseButton
                className="remove-button"
                onClick={this.props.closePopupSignIn}
                style={{ color: "black" }}
              >
                &#10005;
              </CloseButton>
              <LogoContainer src={Logo} />
              <Heading>Have Account?</Heading>
              <Form onSubmit={this.handleSubmit}>
                <FormInput
                  name="email"
                  type="email"
                  handleChange={this.handleChange}
                  value={this.state.email}
                  label="Email Address"
                  required
                />
                <FormInput
                  name="password"
                  type="password"
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label="Password"
                  required
                />
                {this.props.error ? (
                  <Errors>Wrong Email or Password!!!</Errors>
                ) : this.state.success === "success" ||
                  this.props.currentUser ? (
                  <Success>Successful!!!</Success>
                ) : null}
                {this.state.success === "success" || this.props.currentUser ? (
                  <p style={{ textAlign: "center" }}>
                    <CustomButton
                      onClick={this.props.closePopupSignIn}
                      style={{ background: "#e91e63" }}
                    >
                      {" "}
                      Close{" "}
                    </CustomButton>
                  </p>
                ) : (
                  <SigInButtons>
                    <CustomButton
                      type="submit"
                      style={{ background: "#e91e63" }}
                    >
                      {" "}
                      Sign in{" "}
                    </CustomButton>
                    <CustomButton
                      onClick={googleSignInStart}
                      style={{ background: "#e91e63" }}
                    >
                      Sign in with Google
                    </CustomButton>
                  </SigInButtons>
                )}
              </Form>
            </div>
          ) : null}
          <hr />
          {this.state.success === "success" || this.props.currentUser ? null : (
            <div>
              <Heading>Do not have Account?</Heading>
              <p style={{ textAlign: "center" }}>
                <CustomButton
                  onClick={this.showPopUpSignUp.bind(this)}
                  style={{ background: "#e91e63" }}
                >
                  {" "}
                  Sign Up{" "}
                </CustomButton>
              </p>
              {this.state.showPopUpSignUp ? (
                <SignUp
                  showPopUpSignUp={this.state.showPopUpSignUp}
                  closePopUpSignUp={this.showPopUpSignUp.bind(this)}
                />
              ) : null}
            </div>
          )}
        </PopupInner>
      </Popup>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  error: selectCurrentUserLoginError,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);*/

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

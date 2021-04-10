import React from "react";
import { connect } from "react-redux";
import {
  Popup,
  PopupInner,
  Form,
  LogoContainer,
  CloseButton,
  SigInButtons,
  SignInNotifier,
  Heading,
  Errors,
  Success,
} from "./popupSignUp-styles"; //Button
import FormInput from "../form-input/form-input";
import CustomButton from "../CustomButtons/Button";
import Logo from "../../assets/img/logo1.png";

import { signUpStart } from "../../redux/user/user-actions";

import "./sign-up.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
      success: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <Popup>
        <PopupInner>
          <div>
            <CloseButton
              className="remove-button"
              onClick={this.props.closePopUpSignUp}
              style={{ color: "black" }}
            >
              &#10005;
            </CloseButton>
            <LogoContainer src={Logo} />
            <Form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email Adsress"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                label="Password"
                minlength="6"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                minlength="6"
                required
              />
              {this.state.error ? (
                <Errors>{this.state.error}</Errors>
              ) : this.state.success === "success" ? (
                <Success>Successful!!!</Success>
              ) : null}
              <p style={{ textAlign: "center" }}>
                <CustomButton type="submit" style={{ background: "#e91e63" }}>
                  SIGN UP
                </CustomButton>
              </p>
            </Form>
          </div>
        </PopupInner>
      </Popup>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(
  null,
  mapDispatchToProps
)(SignUp);

import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

//import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardFooter from "components/Card/CardFooter.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import {Heading, Container,Content} from "./TransactionSuccess-styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import {withRouter} from 'react-router-dom';
import image from "assets/img/bg7.jpg";
import CustomButton from "components/CustomButtons/Button";
import Cleaner from "components/cleaner/popupCleaner";

import {selectCurrentUser} from '../../redux/user/user-selectors';

const useStyles = makeStyles(styles);

  const TransactionFailed = ({ currentUser, props, history }) => {
  const [Booking, setBooking] = useState(false);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="StarHome Cleaners"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container} style={{width:"100%"}}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color= "success" className={classes.cardHeader} >
                    <h4>Transaction successful</h4>

                  </CardHeader>
                  <Container>
                  <Heading>Complete Booking</Heading>
                      <br/>
                      <p style = {{"textAlign" : "center"}}><CustomButton onClick={() => { history.push('/');}} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">Complete Booking</CustomButton></p> 
                      <br/>
                  </Container>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>

      {Booking ?
          <Cleaner showPopup= {Booking} closePopup ={() => setBooking(!Booking)} currentUser = {currentUser}/>          
          : null
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({ //state will be the root.reducer
  currentUser : selectCurrentUser
}); 

//export default withRouter(TransactionFailed);

export default withRouter(connect(
  mapStateToProps,
  null
)(TransactionFailed));
/*

                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                  </CardFooter>*/

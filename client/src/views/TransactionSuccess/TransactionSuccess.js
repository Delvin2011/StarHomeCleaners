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
import Spinner from 'react-bootstrap/Spinner'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

//import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardFooter from "components/Card/CardFooter.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import {Heading, Container,Content,Response,Errors} from "./TransactionSuccess-styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import {withRouter} from 'react-router-dom';
import image from "assets/img/bg7.jpg";
import CustomButton from "components/CustomButtons/Button";
import Cleaner from "components/cleaner/popupCleaner";
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';

const useStyles = makeStyles(styles);

  const TransactionSuccess = ({ currentUser, cartItems, props, history }) => {
  const [Booking, setBooking] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);


  const classes = useStyles();
  const { ...rest } = props;

  const handleClick = () => {
      setSpinner(true);
       fetch('/email', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "email" : cartItems[cartItems.length - 1].email,
            "customerName" : cartItems[cartItems.length - 1].customerName,
            "phoneNumber": cartItems[cartItems.length - 1].phoneNumber,
            "subject": cartItems[cartItems.length - 1].category,
            "comments": cartItems[cartItems.length - 1].comments,
            "address": cartItems[cartItems.length - 1].address,
            "natureOfServices": cartItems[cartItems.length - 1].service,
            "extraServices": cartItems[cartItems.length - 1].poolDimensions,
            "serviceIntervals": cartItems[cartItems.length - 1].frequency,
            "date": cartItems[cartItems.length - 1].serviceDate,
            "costs": "R " + cartItems[cartItems.length - 1].total,
            "payment": cartItems[cartItems.length - 1].payment
        })
          })
          //.then((response) => {response.json();console.log(response.ok)})
          .then((response) => {
            //this.setState({ response: response.status });
            setResponse(response.status)
            console.log('Success:', response.status);
            setSpinner(false);
          })
          .catch((error) => {
            //this.setState({ error: error });
            setError(error)
            console.error('Error:', error);
          });
    };
    
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
                  <Heading>Submit Booking</Heading>
                      <br/>
                      {  
                          response === 200  ? 
                          <div>
                              <Response>Booking Submitted!!!!</Response>
                              <p style = {{"textAlign" : "center"}}><CustomButton  onClick={() => {history.push('/')}} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">CLOSE</CustomButton></p> 

                          </div>
                          : response === 500 || response === 404 ?
                              <div>
                                  <Errors>Booking Not Submitted!!!!</Errors>
                                  <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">RESUBMIT</CustomButton></p> 
                              </div>
                          :   spinner? <p style = {{"textAlign" : "center"}}><CustomButton  style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">Loading...</CustomButton></p>  
                          
                          :   <p style = {{"textAlign" : "center"}}><CustomButton  onClick={handleClick} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">SUBMIT BOOKING</CustomButton></p>                                    

                      } 
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
  cartItems: selectCartItems,
  currentUser : selectCurrentUser
}); 

export default withRouter(connect(
  mapStateToProps,
  null
)(TransactionSuccess));

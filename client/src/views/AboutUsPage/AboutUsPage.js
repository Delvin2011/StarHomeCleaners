import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
//import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardFooter from "components/Card/CardFooter.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import {Heading, Container,Content} from "./AboutUsPage-styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
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
                  <CardHeader color="primary" className={classes.cardHeader} >
                    <h4>Follow Us</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="https://twitter.com/starhomecleaner?ref_src=twsrc%5Etfw"
                        target="_blank"
                        color="transparent"
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="https://www.facebook.com/StarHomecleaningservices"
                        target="_blank"
                        color="transparent"
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="http://www.instagram.com/starhomecleaner"
                        target="_blank"
                        color="transparent"
                      >
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button
                        justIcon
                        href="https://za.pinterest.com/starhomecleaner/"
                        target="_blank"
                        color="transparent"
                      >
                        <i className={"fab fa-pinterest"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <Container>
                  <Heading>About Us</Heading>
                      <Content>Our services include Home Cleaning, Pool Cleaning & Maintanance and Antiviral Sanitisation.</Content>
                      <br/>
                      <Content>By following quick and easy steps where you book a service of choice online, we dispatch a StarHome Cleaner to your home and we render our services with absolute diligence.</Content>
                      <br/>
                      <Content>Our hiring process for the StarHome Cleaners, requires police clearance from any form of criminality, multilingualism with proficiency in English and vast experience in carrying out cleaning services.</Content>
                      <br/>
                      <Content>Each morning before any of our StarHome Cleaners are dispatched, we ensure health checks are conducted and all hygiene protocols are adhered to.</Content>
                      <br/>
                      <Content>We always aim to deliver favourable services to our clients whilst exhibitng the highest level of professionalsm that gurantees your peace of mind.</Content>
                      <br/>
                  </Container>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

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

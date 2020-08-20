/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section} style = {{marginTop: "-200px"}}>
      <div className={classes.container}>     
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h4 style = {{color : "#3C4858"}}>Thank you for working with us!</h4>
          </GridContainer>
          <Button color="twitter" size="sm">
            <a href="https://twitter.com/starhomecleaner?ref_src=twsrc%5Etfw" style={{color:"white"}}><i className={classes.socials + " fab fa-twitter"} /> Follow</a>
          </Button>
          <Button color="facebook" size="sm">
            <i className={classes.socials + " fab fa-facebook"} /> Follow
          </Button>
          <Button color="rose" size="sm">
            <a href="http://www.instagram.com/starhomecleaner" style={{color:"white"}}><i className={classes.socials + " fab fa-instagram"} />
            Follow</a>
          </Button>
          <Button color="danger" size="sm">
            <a href="https://za.pinterest.com/starhomecleaner/" style={{color:"white"}}><i className={classes.socials + " fab fa-pinterest"} /> Follow</a>
          </Button>
        </div>
      </div>

      <div className={classes.container} style = {{marginTop: "-50px"}}> 
           
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h4 style = {{color : "#3C4858"}}>Secure Payment!</h4>
          </GridContainer>
          <Button color="gray" size="sm">
            <i className={classes.socials + " fab fa-cc-mastercard"} /> MasterCard
          </Button>
          <Button color="gray" size="sm">
            <i className={classes.socials + " fab fa-cc-visa"} /> Visa
          </Button>
          <Button color="gray" size="sm">
            <i className={classes.socials + " fab fa-cc-paypal"} /> PayPal
                      </Button>
        </div>
      </div>
    </div>
  );
}

/*<GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Do you love this UI Kit?</h2>
            <h4>
              Cause if you do, it can be yours for FREE. Hit the buttons below
              to navigate to our website where you can find the kit. We also
              have the Bootstrap 4 version on plain HTML. Start a new project or
              give an old Bootstrap project a new look!
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section"
              target="_blank"
            >
              Free React Download
            </Button>
            <Button
              color="primary"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit?ref=mkr-download-section"
              target="_blank"
            >
              Free HTML Downoad
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Want more?</h2>
            <h4>
              We{"'"}ve launched{" "}
              <a
                href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
                target="_blank"
              >
                Material Kit PRO React{" "}
              </a>
              .It has a huge number of components, sections and example pages.
              Start Your Development With A Badass Material-UI nspired by
              Material Design.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="rose"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
              target="_blank"
            >
              Material Kit PRO
            </Button>
            <Button
              color="rose"
              size="lg"
              href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mkr-download-section"
              target="_blank"
            >
              Material Dashboard PRO
            </Button>
          </GridItem>
        </GridContainer>*/
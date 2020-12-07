import React, { useState, useCallback } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import SectionCarousel from "../Components/Sections/SectionCarousel.js";
import SectionDownload from "../Components/Sections/SectionDownload.js";
import FormInput from 'components/form-input2/form-input';
import {Form} from 'components/cleaner/popupCleaner-styles'; 

import ProductCarousel from "./productCarousel.js";

// core components

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax2/Parallax.js";

import {
  ViewButton
} from 'components/blog-item/blog-item-styles';
//import profile from "assets/img/faces/christian.jpg";
import profile from '../../assets/img/logo1.png';
import CustomButton from "components/CustomButtons/Button";

import {GiVacuumCleaner} from 'react-icons/gi';
import {GiWheelbarrow} from 'react-icons/gi';
import {FaSwimmingPool} from 'react-icons/fa';
import NavPills from "components/NavPills/NavPills.js";

import {withRouter} from 'react-router-dom';
import styles from "assets/jss/material-kit-react/views/profilePage.js";


const useStyles = makeStyles(styles);

const ProductPage = (props) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState('1');
  const { items,...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery, classes.imgHoverOpacity);
  const onSetQuantity = useCallback((ev)  => {
    setQuantity(ev.target.value);
  }, []);

  const unitPrice = String(props.location.state[0].Price).split("$");
  const Price = parseFloat(unitPrice[1]) * parseFloat(quantity);

  return (

    <div>
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{props.location.state[0].Name}</h3>
                  </div>
                  <div className={classes.description}>
                    <p className={classes.description}>
                    {props.location.state[0].Description}
                    </p>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>                
            <div className={classes.container} >
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <ProductCarousel item = {props.location.state[0].imageUrl}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style = {{"marginTop": "20px"}}>
                <div ><h3>Unit Price : {props.location.state[0].Price}</h3></div>
                <div>
                  <h3>Quantity : </h3>
                    <Form style = {{"color": "red", fontSize : "10px", width : "50px"}}>                 
                      <FormInput
                          id="fname"
                          size="10"
                          type="number"
                          name="fname"
                          placeholder="1"
                          onChange = {onSetQuantity}//{this.handleGenCleaningWeekFreq.bind(this)}
                          min="1" max="10"
                          required
                      />
                    </Form>
                </div>
                <div ><h3>Total : ${Price}</h3></div>
            <p style = {{"textAlign" : "center"}}><CustomButton  style = {{"background": "#9c27b0"}}>Add to Cart</CustomButton></p>        

                </GridItem>
              </GridContainer>
              <SectionDownload/>          
            </div>
          </div>
      <Footer />
    </div>
  );
}

export default (ProductPage);

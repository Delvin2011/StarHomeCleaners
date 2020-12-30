import React, { useState, useCallback } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import SectionCarousel from "../Components/Sections/SectionCarousel.js";
import SectionDownload from "../Components/Sections/SectionDownload.js";
import FormInput from 'components/form-input2/form-input';
import {Form} from 'components/cleaner/popupCleaner-styles'; 
import { connect } from 'react-redux';
import ProductCarousel from "./productCarousel.js";
import { addDecoItem } from '../../redux/decoCart/decoCart-actions';

// core components

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax2/Parallax.js";
import profile from '../../assets/img/logo1.png';
import CustomButton from "components/CustomButtons/Button";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles(styles);

const ProductPage = (props) => {
  console.log(props.history.location.state);
  var items = props.history.location.state; //props.location.state[0];

  const classes = useStyles();
  const [quantity, setQuantity] = useState('1');
  const { price,name,Description,imageUrl} = items;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const TotalPrice = parseFloat(price) * parseFloat(quantity);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery, classes.imgHoverOpacity);
  const onSetQuantity = useCallback((ev)  => {
    setQuantity(ev.target.value);
    items.Quantity = quantity;
    items.TotalPrice = parseFloat(price) * parseFloat(quantity);
  }, []);



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
                    <h3 className={classes.title}>{name}</h3>
                  </div>
                  <div className={classes.description}>
                    <p className={classes.description}>
                    {Description}
                    </p>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>                
            <div className={classes.container} >
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <ProductCarousel item = {imageUrl}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style = {{"marginTop": "20px"}}>
                <div ><h3>Unit Price : R {price}</h3></div>
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
                <div ><h3>Total : R {TotalPrice}</h3></div>
                <p style = {{"textAlign" : "center"}}><CustomButton  style = {{"background": "#9c27b0"}} onClick={() => props.addDecoItem(items)}>Add to Cart</CustomButton></p>  
                <p style = {{"textAlign" : "center"}}><CustomButton  style = {{"background": "#e91e63"}} onClick={() => {props.history.push('/checkout');}}>Go to Checkout</CustomButton></p>      

                </GridItem>
              </GridContainer>
              <SectionDownload/>          
            </div>
          </div>
      <Footer />
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  addDecoItem: items => dispatch(addDecoItem(items))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(ProductPage)); 

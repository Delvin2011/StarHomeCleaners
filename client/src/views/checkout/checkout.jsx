import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; //bcoz we gonna be pulling stufff off the state
import CustomButton from "../../components/CustomButtons/Button";
import CheckoutItem from '../../components/checkout-item/checkout-item';
import {selectDecoCartItems,selectDecoCartTotal} from '../../redux/decoCart/decoCart-selectors';
import './checkout.scss';
import Footer from "components/Footer/Footer.js";
import SectionDownload from "../Components/Sections/SectionDownload.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax2/Parallax.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import profile from '../../assets/img/logo1.png';
import DecoCheckoutDetails from '../../components/decoShop/decoCheckoutDetails/decoCheckoutDetails';
const useStyles = makeStyles(styles);



const CheckoutPage = ({props,decoCartItems,total}) => {
    const classes = useStyles();
    const { ...rest } = props;
    const [checkoutDetails, setCheckoutDetails] = useState(false);
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery, classes.imgHoverOpacity);
    
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
                      <h3 className={classes.title}>StarHome Hand Crafted Decors</h3>
                    </div>
                    <div className={classes.description}>
                      <p className={classes.description}>
                      Offering high quality janitorial cleaning services, that leaves your home sparkling clean. By following simple steps to make a booking, our well trained and experienced team will come and transform your home into the cleanest and healthiest place.
                      </p>
                    </div>
                  </div>
                </GridItem>
                
    <div className = 'checkout-page'>
        <div className = 'checkout-header'>
            <div className = 'header-block'>
                <span>Product</span>
            </div>
            <div className = 'header-block'>
                <span>Name</span>
            </div>
            <div className = 'header-block'>
                <span>Quantity</span>
            </div>
            <div className = 'header-block'>
                <span>Unit Price</span>
            </div>
            <div className = 'header-block'>
                <span>Remove</span>
            </div>
        </div>
                {
                    decoCartItems.map(decoCartItem => (
                    
            <CheckoutItem key={decoCartItem.id} decoCartItem={decoCartItem} />
            ))}


        <div className = 'total'>
            <span>
                TOTAL: R{total.toFixed(2)}
            </span>
        </div>  
        <p style = {{"textAlign" : "center"}}><CustomButton style = {{"marginTop" : "12.5px", "background": "#e91e63"}} onClick = {() => setCheckoutDetails(!checkoutDetails)} >Pay Now     R{total.toFixed(2)}</CustomButton></p>     
     
    </div>
    </GridContainer>
            <div >
                <SectionDownload />
            </div>
          </div>
        </div>     
        <Footer />

        {checkoutDetails ?
          <DecoCheckoutDetails showCheckoutDetails = {() => setCheckoutDetails(!checkoutDetails)}/>          
          : null
        }   
    </div>



);
}

const mapStateToProps = createStructuredSelector ({
    decoCartItems: selectDecoCartItems,
    total: selectDecoCartTotal})

export default connect(mapStateToProps)(CheckoutPage);


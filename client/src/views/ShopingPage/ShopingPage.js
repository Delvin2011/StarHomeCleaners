import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Cleaner from "components/cleaner/popupCleaner";
import SectionCarousel from "../Components/Sections/SectionCarousel.js";
import SectionDownload from "../Components/Sections/SectionDownload.js";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax2/Parallax.js";
import {
  ViewButton
} from 'components/blog-item/blog-item-styles';
//import profile from "assets/img/faces/christian.jpg";
import profile from '../../assets/img/logo1.png';
import CustomButton from "components/CustomButtons/Button";


import Bathroom from "assets/img/examples/Bathroom.jpg";
import Kitchen from "assets/img/examples/Kitchen.jpg";
import Bedroom from "assets/img/examples/Bedroom.jpg";
import Dining from "assets/img/examples/Dining.jpg";
//import work5 from "assets/img/examples/clem-onojegaw.jpg";

import Grass from "assets/img/examples/Grass.jpg";
import Leaves from "assets/img/examples/Leaves.jpg";
import Flowers from "assets/img/examples/Flowers.jpg";
import Driveway from "assets/img/examples/Driveway.jpg";

import Pool1 from "assets/img/examples/Pool1.jpg";
import Pool2 from "assets/img/examples/Pool2.jpg";
import Pool3 from "assets/img/examples/Pool3.jpg";
import Pool6 from "assets/img/examples/Pool6.jpg";
import Pool5 from "assets/img/examples/Pool5.jpg";

import OutdoorFlowerHolder from "assets/img/examples/OutdoorFlowerHolder.jpg";


import InfoArea from "components/InfoArea/InfoArea.js";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices'; //Web & Mobile Dev
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'; //confirm order
import {IoIosSpeedometer} from 'react-icons/io';


import StarsIcon from '@material-ui/icons/Stars';

import {GiVacuumCleaner} from 'react-icons/gi';
import {GiWheelbarrow} from 'react-icons/gi';
import {FaSwimmingPool} from 'react-icons/fa';
import {withRouter} from 'react-router-dom';
import styles from "assets/jss/material-kit-react/views/profilePage.js";


const useStyles = makeStyles(styles);

const ShopingPage = ({ props, history }) => {
  const classes = useStyles();
  const [GetIndoorService, setGetIndoorService] = useState(false);
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery, classes.imgHoverOpacity);
  const items = [
    {
      name : "Country Walking Backpack - 30L",
      Description : "Foam straps and back - 4 pads | 2 thumb-holes | Waist & chest belt.;4 zipped pockets | 2 Bottle holders | Stick holders | Elastic for your jacket.;Volume: 30 litres | Weight: 616 g | Dimensions: 56 x 26 x 20 cm.;Component resistant to abrasion (ground and back) | Guaranteed 10 years.;Simple back | No ventilation system.",
      imageUrl : {
        Url1 : "https://i.ibb.co/W0RMXKW/b1-min.png", 
        Url2 : "https://i.ibb.co/W0RMXKW/b1-min.png",
        Url3 : "https://i.ibb.co/W0RMXKW/b1-min.png",
        Url4 : "https://i.ibb.co/W0RMXKW/b1-min.png",
      },      
      price : "20",
      Available: true,
      id : 1
    }
  ];
//console.log(items);
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
            </GridContainer>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}  >
                <NavPills
                  alignCenter
                  color="primary"
                  
                  tabs={[
                    {
                      tabButton: "Indoor",
                      tabIcon: GiVacuumCleaner,                     
                      tabContent: (
                        <GridContainer justify="center" >
                          <GridItem xs={12} sm={12} md={4} >
                            <img
                              alt="..."
                              src={Dining}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={Kitchen}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={Bedroom}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={Bathroom}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Outdoor",
                      tabIcon: GiWheelbarrow,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={Grass}
                              className={navImageClasses}
                            />
                              <img
                                alt="..."
                                src={OutdoorFlowerHolder}
                                className={navImageClasses}
                                onClick={() => { history.push('/product',items);}}
                              />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={Leaves}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={Driveway}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Pools",
                      tabIcon: FaSwimmingPool,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={Pool6}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={Pool1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={Pool5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={Pool2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={Pool3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          
                        </GridContainer>
                      )
                    }
                  ]}
                />

              </GridItem>


            </GridContainer>  
            <p style = {{"textAlign" : "center",  marginTop: "-75px"}}><CustomButton onClick={() => { history.push('/Collection');}} style = {{"background": "#9c27b0"}}>View More</CustomButton></p>        
          </div>                
            <div className={classes.container}>
              <SectionCarousel/>
              <SectionDownload/>          
            </div>
      </div>

      <Footer />

      {GetIndoorService?
      
      <Cleaner showPopup= {GetIndoorService} closePopup ={() => setGetIndoorService(!GetIndoorService)} />          
      : null
    }
    </div>
  );
}

export default withRouter(ShopingPage);

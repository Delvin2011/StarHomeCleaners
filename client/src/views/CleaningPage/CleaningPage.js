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

import InfoArea from "components/InfoArea/InfoArea.js";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices'; //Web & Mobile Dev
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'; //confirm order
import {IoIosSpeedometer} from 'react-icons/io';


import StarsIcon from '@material-ui/icons/Stars';

import {GiVacuumCleaner} from 'react-icons/gi';
import {GiWheelbarrow} from 'react-icons/gi';
import {FaSwimmingPool} from 'react-icons/fa';

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function CleaningPage(props) {
  const classes = useStyles();
  const [GetIndoorService, setGetIndoorService] = useState(false);
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                    <h3 className={classes.title}>StarHome Cleaners</h3>
                  </div>
                  <div className={classes.description}>
                    <p className={classes.description}>
                    Offering high quality janitorial cleaning services, that leaves your home sparkling clean. Our team is well trained, experienced and always ready to transform your space into the cleanest and healthiest place.
                    </p>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div style = {{"textAlign": "center"}}> 
              <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={3}>
                <InfoArea
                  title="Book Service Online"
                  description="Make use of our online platform to book services of choice."
                  icon={ImportantDevicesIcon}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                  <InfoArea
                    title="We Acknowledge Booking"
                    description="Once booking is done, we receive and confirm the booking. "
                    icon={AssignmentTurnedInIcon}
                    iconColor="success"
                    vertical
                  />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <InfoArea
                  title="We Dispatch Worker"
                  description="We dispatch the appropriate worker/s for the services required."
                  icon={IoIosSpeedometer}
                  iconColor="warning"
                  vertical
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="We Leave You Satisfied"
                description="We offer our services with excellence and to your satisfaction."
                icon={StarsIcon}
                iconColor="danger"
                vertical
              />
            </GridItem>
            </GridContainer>
            </div>
            <GridContainer justify="center" style = {{"textAlign": "center"}}>
              <GridItem xs={12} sm={12} md={8}>
                <h3 className={classes.title}>Cleaning Services Offered</h3>
                <p className={classes.description}>
                  For a cleaning service that guarantees your satisfaction, book with us and we can handle your indoors or outdoors or pool cleaning needs.
                </p>
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
                              src={Flowers}
                              className={navImageClasses}
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
            <p style = {{"textAlign" : "center",  marginTop: "-75px"}}><CustomButton onClick = {() => setGetIndoorService(!GetIndoorService)} style = {{"background": "#9c27b0"}}>Book Service</CustomButton></p>        
          </div>                
            <div className={classes.container}>
              <SectionCarousel/>
              <SectionDownload/>          
            </div>
      </div>

      <Footer />

      {GetIndoorService?
      
      <Cleaner showPopup= {GetIndoorService} closePopup ={() => setGetIndoorService(!GetIndoorService)}/>          
      : null
    }
    </div>
  );
}

/*      

  const [GetIndoorService, setGetIndoorService] = useState(false);
  const [GetOutdoorService, setGetOutdoorService] = useState(false);

{this.state.showPopupCleaner?
          <Cleaner showPopup = {this.state.showPopupCleaner} closePopup={this.selectCleaner.bind(this)}/>
          : null
        }        */
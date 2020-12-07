import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Cleaner from "components/cleaner/popupCleaner";
//import SectionCarousel from "../Components/Sections/SectionCarousel.js";
import SectionDownload from "../Components/Sections/SectionDownload.js";

// core components

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax2/Parallax.js";

//import profile from "assets/img/faces/christian.jpg";
import profile from '../../assets/img/logo1.png';
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import {
  /*CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  ViewButton,
  BackgroundImage,
  SummaryContainer,
  BlogsContainer,*/
  HeaderContent,
  Content
} from '../../components/blog-item/blog-item-styles';

import 'react-accessible-accordion/dist/fancy-example.css';

const useStyles = makeStyles(styles);

export default function CostlyDIY(props) {
  const classes = useStyles();
  const [GetIndoorService, setGetIndoorService] = useState(false);
  const { items,...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  //console.log(props.location.state[0]);
  return (

    <div>
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center" style = {{"textAlign": "center"}}>
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>StarHome Cleaners</h3>
                  </div>
                    <HeaderContent>
                    Offering high quality janitorial cleaning services, that leaves your home sparkling clean. By following simple steps to make a booking, our well trained and experienced team will come and transform your home into the cleanest and healthiest place.
                    </HeaderContent>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center" style = {{"textAlign": "center"}}>
              <GridItem xs={12} sm={12} md={8}>
                <h4 className={classes.title}>DIY cleaning tends to be costly than budgted for. But how so?</h4>
                <HeaderContent >
                A majority of home owners are adamant of outsourcing home cleaning services and are unaware of the hidden cost implicications of DIY cleaning. Below we unravel the cost implications!</HeaderContent>
              </GridItem>
            </GridContainer>

            <GridContainer justify="left" style = {{"textAlign": "left"}}>
              <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.title}>1. Costly big brands bias</h4>
                <Content >
                Home owners tend to have a bias towards expensive cleaning products, a biasness that doesn't automatically translate to an immaculate and hygeinic home.
                However professional cleaners, knows the appropriate and less costly cleaning products and also their application in right amounts to ensure your home is in optimum condition.
                Moreover, if you hire a recurring home cleaning service, you won’t need to worry about stocking cleaning supplies as the cleaning professionals bring the appropriate supplies with them.
                </Content>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.title}>2. Acquiring Costly cleaning or gardening equipment</h4>
                <Content >
                Home owners can waste a lot of money buying cleaning or gardening equipment that is rarely used e.g. lawn mowers, trimmers, pool vacuum cleaners, gardening tools, wheelbarrow etc. Not only is the equipment costly to buy, but also
  gives a headache on secure storage, requires frequent maintenance, risk theft if not secured properly and etc. However professionals, can reduce your burden by bringing cleaning supplies and equipment as necessary.

                </Content>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.title}>3. Costly medical bills </h4>
                <Content >
                With DIY cleaning, home owners tends to overlook or forget certain areas when cleaning, thus also leaving hotspots for emanation of germs and bacteria that causes sicknesses. This results in costly medical attention being a priority, a predicament
that could have been easily avoided by hiring a professional cleaning service. Professionals will make sure to clean your niche in the best possible ways, eliminating the chances of having germs and disease causing pests lingering in the nooks and corners of your home and therefore saving home owners some medical bills in the long run.
                </Content>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.title}>4. Costly time wasted</h4>
                <Content >
                DIY cleaning requires several hours of commitiment every week, an endeavour that hinders most home owners of resting or relaxing. Such a commitiment on a weekly basis is costly, as several hours spent on DIY cleaning, could have been spent on other productive things e.g. catching up on a project or online courses, meeting with business partners,
 going out to make some sales/business, time with family or resting to recuperate energies for future tasks. Hiring affordable professional cleaning services, will provide home owners with increasd free time that can be channeled to other relevent and truly cherished activitiies.
 </Content>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.title}>5.  Costly home repairs or home market value drop</h4>
                <Content >
                Most home owners, don’t possess the experience and specialized knowledge to clean every area of their homes properly. This will inturn result in bugs infesting in rooms and things starting to break down. The end result of such a predicament is very costly as most homes start losing their market value and also requiring costly repairs for any break downs.
By hiring professional cleaning services, the services keeps your home sanitary, looking inviting, keeping bugs down to a minimum and saving your investment in the long run. </Content>
              </GridItem>
            </GridContainer>

            </div>                
            <div className={classes.container} style = {{"marginTop": "50px"}}>
              <SectionDownload/>          
            </div>
      </div>
      <Footer />
    </div>
  );
}

/*<AddButton onClick={() => addItem(item)} inverted>
Add to cart
</AddButton>*/
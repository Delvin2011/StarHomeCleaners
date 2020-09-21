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
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  ViewButton,
  BackgroundImage,
  SummaryContainer,
  BlogsContainer
} from '../../components/blog-item/blog-item-styles';

import 'react-accessible-accordion/dist/fancy-example.css';

const useStyles = makeStyles(styles);

export default function Blogs(props) {
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
            <GridContainer justify="center" style = {{"textAlign": "center"}}>
              <GridItem xs={12} sm={12} md={8}>
                <h3 className={classes.title}>Frequently Asked Questions</h3>
                <p className={classes.description}>
                  From the survey conducted, the frequently asked questions (FAQ's) are resolved below. However, if you might still have unaswered questions, please do contact our support team.
                </p>
              </GridItem>
            </GridContainer>
            <BlogsContainer>
            <CollectionItemContainer>
              <BackgroundImage className='image' imageUrl={require("assets/img/examples/Dining.jpg")} />
              <CollectionFooterContainer>
                <SummaryContainer>From the survey conducted, the frequently asked questions (FAQ's) are resolved below.</SummaryContainer>
              </CollectionFooterContainer>
              <ViewButton>
                      Read More 
              </ViewButton>
            </CollectionItemContainer>

            <CollectionItemContainer>
              <BackgroundImage className='image' imageUrl={require("assets/img/examples/grant_me_courage.png")} />
              <CollectionFooterContainer>
                <SummaryContainer>From the survey conducted, the frequently asked questions (FAQ's) are resolved below.</SummaryContainer>
              </CollectionFooterContainer>
              <ViewButton>
                      Read More 
              </ViewButton>
            </CollectionItemContainer>
          </BlogsContainer>
            </div>                
            <div className={classes.container}>
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

/*<AddButton onClick={() => addItem(item)} inverted>
Add to cart
</AddButton>*/
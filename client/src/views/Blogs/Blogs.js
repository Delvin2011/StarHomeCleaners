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
import {withRouter} from 'react-router-dom';
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
  BlogsContainer,
  HeaderContent
} from '../../components/blog-item/blog-item-styles';

import 'react-accessible-accordion/dist/fancy-example.css';

const useStyles = makeStyles(styles);

const Blogs = ({ props, history }) => {
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
                    <HeaderContent >
                     Offering high quality janitorial cleaning services, that leaves your home sparkling clean. By following simple steps to make a booking, our well trained and experienced team will come and transform your home into the cleanest and healthiest place.
                    </HeaderContent>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center" style = {{"textAlign": "center"}}>
              <GridItem xs={12} sm={12} md={8}>
                <h4 className={classes.title}>Blogs</h4>
                <HeaderContent >
                  StarHome Cleaners strives to engage with clients through blog material that equips them with relevant information on how to keep their homes immaculate all the time.
                </HeaderContent>
              </GridItem>
            </GridContainer>

            <BlogsContainer>
            <CollectionItemContainer>
              <BackgroundImage className='image' imageUrl={require("assets/img/examples/grant_me_courage.png")} />
              <CollectionFooterContainer>
                <HeaderContent>DIY cleaning tends to be costly than budgted for. But how so?<a href = "/CostlyDIY"> Read more...</a></HeaderContent>
              </CollectionFooterContainer>
              <ViewButton onClick={() => { history.push('/CostlyDIY');}}>
                      Read More 
              </ViewButton>
            </CollectionItemContainer>
          </BlogsContainer>

            </div>                
            <div className={classes.container} style = {{"marginTop": "60px"}}>
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

export default withRouter(Blogs);
/*<AddButton onClick={() => addItem(item)} inverted>
Add to cart
</AddButton>*/
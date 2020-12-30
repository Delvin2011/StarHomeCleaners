import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {connect}from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../decoCollectionPreview/decoCollectionPreview';
import {selectCollectionsForPreview} from '../../../redux/shop/shop-selectors';
import './collections-overview.scss';

import Footer from "components/Footer/Footer.js";
import SectionDownload from "../../../views/Components/Sections/SectionDownload.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax2/Parallax.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import profile from '../../../assets/img/logo1.png';
const useStyles = makeStyles(styles);


const CollectionsOverview = ({props,collections}) => 
{
    const classes = useStyles();
    const [GetIndoorService, setGetIndoorService] = useState(false);
    const { ...rest } = props;
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
            <div className = 'collections-overview'>
                {
                    collections.map( ({id, ...otherCollectionProps}) => (
                        <PreviewCollection key = {id} {...otherCollectionProps}/>
                    ))
                }
            </div>
            
          </GridContainer>
          <div style = {{"marginTop" : "50px"}}>
            <SectionDownload />
          </div>
          </div>
          
        </div>
        
        <Footer />
    </div>
    );
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);


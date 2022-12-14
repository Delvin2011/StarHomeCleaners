import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import {BsPeopleCircle} from "react-icons/bs";
import {RiMessage3Line} from "react-icons/ri";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import style from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);
const useStyle = makeStyles(style);


export default function ProductCarousel(props) {
  const classes = useStyles();
  const classe = useStyle();
  console.log(props.item.imageUrl);
  const { item,...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  
  return (
    <div className={classe.section} style = {{marginTop: "-50px"}}>

      <div className={classe.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={props.item.imageUrl} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={props.item.imageUrl2} alt="Second slide" className="slick-image"/>
                </div>
                <div>
                  <img src={props.item.imageUrl3} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={props.item.imageUrl3} alt="Fourth slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

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

import { BsPeopleCircle } from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import style from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);
const useStyle = makeStyles(style);

export default function SectionCarousel() {
  const classes = useStyles();
  const classe = useStyle();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classe.section} style={{ marginTop: "-100px" }}>
      <div className={classe.container}>
        <h3
          className={classe.title}
          style={{ color: "#3C4858", fontWeight: "bold" }}
        >
          Clients{"'"} Feedback
        </h3>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3>
                      <BsPeopleCircle className={classes.icons} /> Tess Steyl
                    </h3>
                    <h4>
                      <RiMessage3Line className={classes.icons} /> Memory was
                      very very polite, on time and very very helpful. I would
                      Recommend Starhome Cleaners any day. Thank you very
                      much...
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h3>
                      <BsPeopleCircle className={classes.icons} /> Quentyn
                      Matjaka
                    </h3>
                    <h4>
                      <RiMessage3Line className={classes.icons} /> As their name
                      suggests they are indeed stars at cleaning homes, they're
                      quick to arrive and through at what they do.
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3>
                      <BsPeopleCircle className={classes.icons} /> Cuber E
                      Carter
                    </h3>
                    <h4>
                      <RiMessage3Line className={classes.icons} /> Thank you for
                      a Job well done..
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

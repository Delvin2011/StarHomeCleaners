/*eslint-disable*/
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";
import Cleaner from "components/cleaner/popupCleaner";
// Icons
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import {MdLocationOn} from "react-icons/md";
import {MdLocalPhone} from "react-icons/md";
import {FaBlog} from "react-icons/fa";
import {FaBookReader} from "react-icons/fa";


import Contact from "../contact-us/contact-us";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [Email, setEmail] = useState(false);
  const [Phone, setPhone] = useState(false);
  const [Booking, setBooking] = useState(false);
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Contacts"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a
              href="https://wa.me/27787243693"
              target="_blank"
              className={classes.dropdownLink}
            > <IoLogoWhatsapp style={{color: '#25d366'}}/> WhatsApp
            </a>,
            <a
              href=""
              target="_blank"
              className={classes.dropdownLink}
             
            > <FaFacebook style={{color: '#3b5998'}}/> Facebook
            </a>,
            <a
              className={classes.dropdownLink}
              onClick = {() => setEmail(!Email)}
            > <MdEmail style={{color: '#B8B8B8'}}/> Email
            </a>,
            <a
              href="http://www.google.com/maps/place/-26.174525,28.255771"
              target="_blank"
              className={classes.dropdownLink}
            > <MdLocationOn style={{color: 'red'}}/> Location
            </a>,
            <a
              onClick = {() => setPhone(!Phone)}
              className={classes.dropdownLink}
            > <MdLocalPhone style={{color: '#00FFFF'}}/> Phone
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
            //href="blogs-page"
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick = {() => setBooking(!Booking)}
          >
            <FaBlog className={classes.icons} /> Book  a Service
        </Button>
        </ListItem>
        <ListItem className={classes.listItem}>

          <Button
            href="about-us"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <FaBookReader className={classes.icons} /> About Us
          </Button>
        </ListItem>

        {Email ?
          <Contact showPopup = {Email} closePopup={() => setEmail(!Email)}/>
          : null
        }

        {Phone ?
          <Contact showPopupPhone = {Phone} closePopupPhone={() => setPhone(!Phone)}/>
          : null
        }

        {Booking ?
          <Cleaner showPopup= {Booking} closePopup ={() => setBooking(!Booking)}/>          
          : null
        }
    </List>
  );
}


/*            
        <Button
            href= "profile-page"//{<ProfilePage />}
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <GoBriefcase className={classes.icons} /> Portfolio
          </Button>

<Link to="https://wa.me/27787243693" className={classes.dropdownLink}>
              <IoLogoWhatsapp style={{color: '#25d366'}}/> WhatsApp
            </Link>,

            
       <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>               
            */
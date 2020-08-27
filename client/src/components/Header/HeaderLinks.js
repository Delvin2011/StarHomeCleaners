/*eslint-disable*/
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import {connect} from 'react-redux';
// @material-ui/icons
import { Apps } from "@material-ui/icons";
import Cleaner from "components/cleaner/popupCleaner";
import SignIn from "../sign-in/sign-in";
// Icons
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import {MdLocationOn} from "react-icons/md";
import {MdLocalPhone} from "react-icons/md";
import {FaBlog} from "react-icons/fa";
import {FaBookReader} from "react-icons/fa";
import {GoSignIn} from "react-icons/go";
import {GoSignOut} from "react-icons/go";



import Contact from "../contact-us/contact-us";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const useStyles = makeStyles(styles);

 function HeaderLinks({currentUser}) {
  const classes = useStyles();
  const [Email, setEmail] = useState(false);
  const [Phone, setPhone] = useState(false);
  const [Booking, setBooking] = useState(false);
  const [SigningIn, setSigningIn] = useState(false);
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
              href="https://www.facebook.com/StarHomecleaningservices"
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

        {currentUser?

        <Button
            //href="blogs-page"
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick = {() => auth.signOut()}
          >
            <GoSignOut className={classes.icons} /> Sign Out
        </Button>

        :
        <Button
            //href="blogs-page"
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick = {() => setSigningIn(!SigningIn)}
          >
            <GoSignIn className={classes.icons} /> Sign In
        </Button>
        }
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
          <Contact showPopup = {Email} closePopup={() => setEmail(!Email)} currentUser = {currentUser}/>
          : null
        }

        {Phone ?
          <Contact showPopupPhone = {Phone} closePopupPhone={() => setPhone(!Phone)}/>
          : null
        }

        {Booking ?
          <Cleaner showPopup= {Booking} closePopup ={() => setBooking(!Booking)} currentUser = {currentUser}/>          
          : null
        }

        {SigningIn ?
          <SignIn showPopupSignIn= {SigningIn} closePopupSignIn ={() => setSigningIn(!SigningIn)} currentUser = {currentUser}/>          
          : null
        }
    </List>
  );
}

const mapStateToProps = state => ({ //state - root reducer
  currentUser: state.user.currentUser
}); 

export default connect(mapStateToProps)(HeaderLinks);



/*
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";
import Cleaner from "components/cleaner/popupCleaner";
import SignIn from "../sign-in/sign-in";
// Icons
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import {MdLocationOn} from "react-icons/md";
import {MdLocalPhone} from "react-icons/md";
import {FaBlog} from "react-icons/fa";
import {FaBookReader} from "react-icons/fa";
import {GoSignIn} from "react-icons/go";
import {GoSignOut} from "react-icons/go";



import Contact from "../contact-us/contact-us";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const useStyles = makeStyles(styles);

export default function HeaderLinks({currentUser}) {
  const classes = useStyles();
  const [Email, setEmail] = useState(false);
  const [Phone, setPhone] = useState(false);
  const [Booking, setBooking] = useState(false);
  const [SigningIn, setSigningIn] = useState(false);
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
              href="https://www.facebook.com/StarHomecleaningservices"
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

        {currentUser?

        <Button
            //href="blogs-page"
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick = {() => auth.signOut()}
          >
            <GoSignOut className={classes.icons} /> Sign Out
        </Button>

        :
        <Button
            //href="blogs-page"
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick = {() => setSigningIn(!SigningIn)}
          >
            <GoSignIn className={classes.icons} /> Sign In
        </Button>
        }
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
          <Contact showPopup = {Email} closePopup={() => setEmail(!Email)} currentUser = {currentUser}/>
          : null
        }

        {Phone ?
          <Contact showPopupPhone = {Phone} closePopupPhone={() => setPhone(!Phone)}/>
          : null
        }

        {Booking ?
          <Cleaner showPopup= {Booking} closePopup ={() => setBooking(!Booking)} currentUser = {currentUser}/>          
          : null
        }

        {SigningIn ?
          <SignIn showPopupSignIn= {SigningIn} closePopupSignIn ={() => setSigningIn(!SigningIn)} currentUser = {currentUser}/>          
          : null
        }
    </List>
  );
}          
            */
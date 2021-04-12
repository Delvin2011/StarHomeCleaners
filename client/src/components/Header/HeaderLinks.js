/*eslint-disable*/
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// @material-ui/icons
import { Apps } from "@material-ui/icons";
import Cleaner from "components/cleaner/popupCleaner";
import Bookings from "../Bookings/bookings";
import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";
// Icons
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import { MdLiveHelp } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { SiMicroDotBlog } from "react-icons/si";
import { MdShoppingBasket } from "react-icons/md";

import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { selectDecoCartItemsCount } from "../../redux/decoCart/decoCart-selectors";
import { signOutStart } from "../../redux/user/user-actions";

import Contact from "../contact-us/contact-us";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { Modal, Spinner } from "reactstrap";
const useStyles = makeStyles(styles);

itemCount: selectCartItemsCount;
function HeaderLinks({
  currentUser,
  signOutStart,
  itemCount /*, decoItemCount */,
}) {
  const classes = useStyles();
  const [Email, setEmail] = useState(false);
  const [Phone, setPhone] = useState(false);
  const [Booking, setBooking] = useState(false);
  const [SigningIn, setSigningIn] = useState(false);
  const [GetBookings, setGetBookings] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [modal, setModal] = useState(false);
  const [SigningUp, setSigningUp] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            //href="blogs-page"
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick={() => setBooking(!Booking)}
          >
            <SiMicroDotBlog className={classes.icons} /> Book a Service
          </Button>
        </ListItem>

        <ListItem className={classes.listItem}>
          {/*<ListItem className={classes.listItem}>
          <Button
              href="DecorShop"
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              <MdShoppingBasket className={classes.icons} /> Shop
            </Button>
        </ListItem>*/}

          {currentUser ? (
            <Button
              //href="blogs-page"
              color="transparent"
              target="_blank"
              className={classes.navLink}
              onClick={signOutStart}
            >
              <GoSignOut className={classes.icons} /> Sign Out
            </Button>
          ) : (
            <Button
              //href="blogs-page"
              color="transparent"
              target="_blank"
              className={classes.navLink}
              onClick={() => {
                setSigningIn(!SigningIn);
                setModal(false);
              }}
            >
              <GoSignIn className={classes.icons} /> Sign In
            </Button>
          )}
        </ListItem>

        {/*currentUser?  
          <ListItem className={classes.listItem}>
          <Button
              //href="blogs-page"
              color="transparent"
              target="_blank"
              className={classes.navLink}
              onClick = {() => setGetBookings(!GetBookings)}
            >
              <FaBookReader className={classes.icons} /> Bookings ({itemCount}) & Cart ({decoItemCount})
          </Button>
          </ListItem>
          :
          <ListItem className={classes.listItem}>
          <Button
              //href="blogs-page"
              color="transparent"
              target="_blank"
              className={classes.navLink}
              onClick = {() => setGetBookings(!GetBookings)}
            >
              <FaBookReader className={classes.icons} /> Bookings & Cart
          </Button>
          </ListItem>*/}

        <ListItem className={classes.listItem}>
          <Button
            //href="blogs-page"
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick={() => setGetBookings(!GetBookings)}
          >
            <FaBookReader className={classes.icons} /> Bookings & Promotions
          </Button>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Button
            href="about-us"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <ImNewspaper className={classes.icons} /> About Us
          </Button>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Button
            href="FAQs"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <MdLiveHelp className={classes.icons} /> Help
          </Button>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Button
            href="Blogs"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <FaBlog className={classes.icons} /> Blogs
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Contact US"
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            buttonIcon={Apps}
            dropdownList={[
              <a
                href="https://wa.me/27640461900"
                target="_blank"
                className={classes.dropdownLink}
              >
                {" "}
                <IoLogoWhatsapp style={{ color: "#25d366" }} /> WhatsApp
              </a>,
              <a
                href="https://www.facebook.com/StarHomecleaningservices"
                target="_blank"
                className={classes.dropdownLink}
              >
                {" "}
                <FaFacebook style={{ color: "#3b5998" }} /> Facebook
              </a>,
              <a
                className={classes.dropdownLink}
                onClick={() => setEmail(!Email)}
              >
                {" "}
                <MdEmail style={{ color: "#B8B8B8" }} /> Email
              </a>,
              <a
                href="http://www.google.com/maps/place/-26.174525,28.255771"
                target="_blank"
                className={classes.dropdownLink}
              >
                {" "}
                <MdLocationOn style={{ color: "red" }} /> Location
              </a>,
              <a
                onClick={() => setPhone(!Phone)}
                className={classes.dropdownLink}
              >
                {" "}
                <MdLocalPhone style={{ color: "#00FFFF" }} /> Phone
              </a>,
            ]}
          />
        </ListItem>
      </List>
      {Email ? (
        <Contact
          showPopup={Email}
          closePopup={() => setEmail(!Email)}
          currentUser={currentUser}
        />
      ) : null}

      {Phone ? (
        <Contact
          showPopupPhone={Phone}
          closePopupPhone={() => setPhone(!Phone)}
        />
      ) : null}

      {Booking ? (
        <Cleaner
          showPopup={Booking}
          closePopup={() => setBooking(!Booking)}
          currentUser={currentUser}
        />
      ) : null}

      {GetBookings ? (
        <Bookings
          showPopup={Booking}
          closePopup={() => setGetBookings(!GetBookings)}
          currentUser={currentUser}
        />
      ) : null}

      {SigningIn ? (
        <SignIn
          showPopupSignIn={SigningIn}
          closePopupSignIn={() => setSigningIn(!SigningIn)}
        />
      ) : null}

      {/*SigningUp ? (
        <SignUp
          showPopupSignUp={SigningUp}
          closePopupSignUp={() => setSigningUp(!SigningUp)}
        />
      ) : null*/}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
//createStructuredSelector - properties that we want point to the correct selector
//will get our state into the subsequent selector: currentUser, hidden
const mapStateToProps = createStructuredSelector({
  //state will be the root.reducer
  currentUser: selectCurrentUser,
  itemCount: selectCartItemsCount,
  //decoItemCount: selectDecoCartItemsCount,
}); //naming mapStateToProps can be anything

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLinks);

/*         */

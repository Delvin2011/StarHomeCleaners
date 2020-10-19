/*eslint-disable*/
import React, { useState } from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Cleaner from "components/cleaner/popupCleaner";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import Contact from "../contact-us/contact-us";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user-selectors';




const useStyles = makeStyles(styles);

 function Footer(props) {
  const classes = useStyles();
  const [Email, setEmail] = useState(false);
  const { whiteFont,currentUser } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="about-us"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="FAQs"
                className={classes.block}
                target="_blank"
              >
                Help
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <a
                href="Blogs"
                className={classes.block}
                target="_blank"
              >
                Blogs
              </a>
            </ListItem>


            {Email ?
                <Contact showPopup = {Email} closePopup={() => setEmail(!Email)} currentUser = {currentUser}/>
                : null
            }
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , designed with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="/"
            className={aClasses}
            target="_blank"
          >
            LaVie WebHome
          </a>{" "}
          for a better web that feels more like home.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};


const mapStateToProps = createStructuredSelector({ //state will be the root.reducer
  currentUser : selectCurrentUser
}); //naming mapStateToProps can be anything

export default connect(mapStateToProps,null)(Footer);
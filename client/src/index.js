import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


/*
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import CleaningPage from "views/CleaningPage/CleaningPage.js";
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

var hist = createBrowserHistory();

ReactDOM.render(
  
  <Router history={hist}>
    <MessengerCustomerChat pageId="100313711439727" appId="" size="small"/>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/" component={CleaningPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);*/

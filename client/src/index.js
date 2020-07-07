import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import CleaningPage from "views/CleaningPage/CleaningPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import MessengerCustomerChat from 'react-messenger-customer-chat';

var hist = createBrowserHistory();

ReactDOM.render(
  
  <Router history={hist}>
    <MessengerCustomerChat pageId="100313711439727" appId="" size="small"/>
    <Switch>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={CleaningPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import "assets/scss/material-kit-react.scss?v=1.8.0";
import CleaningPage from "./views/CleaningPage/CleaningPage.js";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.js";
import MessengerCustomerChat from 'react-messenger-customer-chat';

//import './App.css';

import Header from "./components/Header/Header.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";
import SignInAndSignUpPage from "./views/SignInSignUp/SignInSignUp.js";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <MessengerCustomerChat pageId="100313711439727" appId="" size="small"/>
        <Header
            color="transparent"
            brand="StarHome Cleaners"
            rightLinks={<HeaderLinks currentUser={this.state.currentUser} />}
            fixed
            changeColorOnScroll={{
            height: 50,
            color: "white"
            }}

        />
        <Switch>
            <Route path="/sign-in" component={SignInAndSignUpPage} />
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/" component={() => <CleaningPage currentUser={this.state.currentUser} />}/>

        </Switch>
      </div>
    );
  }
}

export default App;

//component={CleaningPage} 
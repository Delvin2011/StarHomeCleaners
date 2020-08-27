import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import "assets/scss/material-kit-react.scss?v=1.8.0";
import CleaningPage from "./views/CleaningPage/CleaningPage.js";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.js";
import MessengerCustomerChat from 'react-messenger-customer-chat';

//import './App.css';

import Header from "./components/Header/Header.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";
import SignInAndSignUpPage from "./views/SignInSignUp/SignInSignUp.js";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
      });
    }
    setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
//100313711439727
  render() {
    return (
      <div>
        <MessengerCustomerChat pageId="111855273790186" appId="" size="small"/>
        <Header
            color="transparent"
            brand="StarHome Cleaners"
            rightLinks={<HeaderLinks/>}
            fixed
            changeColorOnScroll={{
            height: 50,
            color: "white"
            }}
        />
        <Switch>
            <Route path="/sign-in" component={SignInAndSignUpPage} />
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/" component={() => <CleaningPage/>}/>

        </Switch>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => ({ //returns an object
  setCurrentUser: user => dispatch(setCurrentUser(user)) //function that calls the dispatch & setCurrentUser action to the user that will then be used as the payload
});
//dispatch is a way to tell redux that any object you are passing is going to be an action to be passed to the root reducer
export default connect(null,mapDispatchToProps)(App); //null because our App doesn't do anything with the user, just sets it. so no mapStateToProps rather mapDispatchToProps

// triggers the user action --> sets the payload object -->user reducer --> root reducer --> store
//component={CleaningPage} 



/*import React from 'react';
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
//100313711439727
  render() {
    return (
      <div>
        <MessengerCustomerChat pageId="111855273790186" appId="" size="small"/>
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

export default App; */
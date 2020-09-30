import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user-actions';

import "assets/scss/material-kit-react.scss?v=1.8.0";
import CleaningPage from "./views/CleaningPage/CleaningPage.js";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.js";
import TransactionFailed from "./views/TransactionFailed/TransactionFailed.js";
import TransactionSuccess from "./views/TransactionSuccess/TransactionSuccess.js";

import FAQsPage from "./views/FAQsPage/FAQsPage.js";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Blogs from './views/Blogs/Blogs';
import CostlyDIY from  './views/Blogs/CostlyDIY';
//import './App.css';

import Header from "./components/Header/Header.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";
//import SignInAndSignUpPage from "./views/SignInSignUp/SignInSignUp.js";
//import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {selectCurrentUser} from './redux/user/user-selectors';
//import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();

    /*const { setCurrentUser } = this.props;
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
    this.unsubscribeFromAuth();*/
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
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/FAQs" component={FAQsPage} />
            <Route path="/Blogs" component={Blogs} />
            <Route path="/CostlyDIY" component={CostlyDIY} />
            <Route path="/TransactionFailed" component={TransactionFailed} />
            <Route path="/TransactionSuccess" component={TransactionSuccess} />
            <Route path="/" component={() => <CleaningPage/>}/>

        </Switch>
      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
//App doesn't need the current user state, apart from the header component, it only sets the default state.
//Therefore passing null.
export default connect(mapStateToProps,mapDispatchToProps)(App);

/*mapDispatchToProps pass function that can trigger state change to your component props and mapStateToProps pass state to your component props*/


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
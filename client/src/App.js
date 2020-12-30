import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user-actions';

import "assets/scss/material-kit-react.scss?v=1.8.0";
import CleaningPage from "./views/CleaningPage/CleaningPage.js";
import ShopingPage from "./views/ShopingPage/ShopingPage.js";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.js";
import ProductPage from "./views/ProductPage/product.jsx";
import TransactionFailed from "./views/TransactionFailed/TransactionFailed.js";
import TransactionSuccess from "./views/TransactionSuccess/TransactionSuccess.js";
import CheckoutPage from "./views/checkout/checkout.jsx";
import DecorShopCollectionPage from "./views/ShopingPage/decorShopCollection/decorShopCollection.jsx"

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
            <Route path="/checkout" component = {CheckoutPage}/>
            <Route path="/Blogs" component={Blogs} />
            <Route path="/CostlyDIY" component={CostlyDIY} />
            <Route path="/DecorShop" component={ShopingPage}/>
            <Route path="/Collection" component = {DecorShopCollectionPage}/> 
            <Route path="/product" component={ProductPage}/>
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

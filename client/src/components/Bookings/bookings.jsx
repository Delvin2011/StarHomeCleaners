import React from 'react';  
import {Popup,PopupInner,ContentTitle,CloseButton,TabsContainer,DetailHeader,Details,BookingDetail,TCList,CartDetails} from './bookings-styles'; 
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; //bcoz we gonna be pulling stufff off the state

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";
import Tooltip from '@material-ui/core/Tooltip';
import {GiRead} from 'react-icons/gi';
import {GiStarsStack} from 'react-icons/gi';

import {selectCartItems} from '../../redux/cart/cart-selectors';
import {selectDecoCartItems} from '../../redux/decoCart/decoCart-selectors';
import { clearItemFromCart } from '../../redux/cart/cart-actions';
import {clearDecoItemFromCart} from '../../redux/decoCart/decoCart-actions';
import {selectCurrentUser} from '../../redux/user/user-selectors';
import SignIn from '../sign-in/sign-in';
import CustomButton from "../CustomButtons/Button";
import {MdShoppingBasket} from "react-icons/md";
import {withRouter} from 'react-router-dom';

class Bookings extends React.Component {  
 
    constructor(props){
        super(props);  
        this.state = {
          showPopupSignIn: false,
          showPopup: false
        } 

    }

    showPopupSignIn(event) {
      this.setState({
          showPopupSignIn: !this.state.showPopupSignIn
      });
    }

     showPopup(event) {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }


render() {  
const status = "Pending";
//console.log(this.props.currentUser);
const id = this.props.currentUser ? this.props.currentUser.id : '';
const PromoCode = this.props.currentUser ? id.slice(0,5).toUpperCase() : '';
const FriendCode = this.props.currentUser ? id.slice(-5).toUpperCase() : '';
console.log(this.state.showPopup);
return (  <div>{!this.state.showPopup ?     
            <Popup>  
                <PopupInner> 
                <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closePopup} >&#10005;</CloseButton>
                <TabsContainer >                  
                <GridContainer  >
                  <GridItem  style = {{"paddingLeft":"5px","padding-right":"5px"}}>
                    <NavPills
                    alignCenter
                      color="rose"
                      tabs={[
                        {
                          tabButton: "Bookings",
                          tabIcon: GiRead,
                          tabContent: (
                          <div>
                            { this.props.currentUser ? 
                                
                                this.props.cartItems.length > 0 ?
                                <div style = {{"marginTop": "-5px"}}>
                                      <ContentTitle> Details
                                      <span><hr width="300"/></span>
                                      </ContentTitle>
                                      <Details>
                                        <DetailHeader>Date</DetailHeader>
                                        <DetailHeader>Category</DetailHeader>
                                        <DetailHeader>Service</DetailHeader>
                                        <DetailHeader>Frequency</DetailHeader>
                                        <DetailHeader>Status</DetailHeader>
                                        <DetailHeader>Payment</DetailHeader>
                                      </Details>  
                                      {
                                          Object.entries(this.props.cartItems).map(([key, val]) => 
                                          <Details key={key}>
                                            <BookingDetail>{this.props.cartItems[key].serviceDate}</BookingDetail>
                                            <BookingDetail>{this.props.cartItems[key].category}</BookingDetail>
                                            <BookingDetail>{this.props.cartItems[key].service}</BookingDetail>
                                            <BookingDetail>{this.props.cartItems[key].frequency}</BookingDetail>
                                            <BookingDetail>{status}</BookingDetail>
                                            <BookingDetail>{this.props.cartItems[key].payment}</BookingDetail>
                                            <Tooltip title="Cancel Booking" aria-label="add"><BookingDetail onClick = {() => this.props.clearItem(this.props.cartItems[key])} style = {{"cursor": "pointer","alignItems": "left"}}>&#10005;</BookingDetail></Tooltip>
                                          </Details>
                                        )                        
                                      }                        
                                    
                                  </div>
                                : <ContentTitle> No Previous Bookings<span><hr width="300"/></span> </ContentTitle>
                              :  
                              <div>  
                                <ContentTitle> Sign IN/UP <span><hr width="300"/></span> </ContentTitle>
                                <br/>
                                <DetailHeader>Why?</DetailHeader>
                                <TCList>
                                    <br/>
                                        <li>View previous booking.</li>
                                        <li>Cancel pending bookings if need be.</li>
                                        <li>Get customised promotion discounts.</li>
                                </TCList>
                                <br/>
                                <br/>
                                <p style = {{"textAlign" : "center"}}><CustomButton  onClick = {this.showPopupSignIn.bind(this)} style = {{"marginTop" : "12.5px", "background": "#e91e63"}}>Sign In</CustomButton></p>     
 
                              </div>

                            }
                            </div>

                          )
                        },
                        {
                          tabButton: "Shopping Cart",
                          tabIcon: MdShoppingBasket,
                          tabContent: (
                          <div>
                            { this.props.currentUser ? 
                                this.props.decoCartItems.length > 0 ?
                                  <div style = {{"marginTop": "-5px"}}>
                                        <ContentTitle> Details <span><hr width="300"/></span> </ContentTitle> 
                                          <CartDetails>
                                            <DetailHeader>Product</DetailHeader>
                                            <DetailHeader>Category</DetailHeader>
                                            <DetailHeader>Quantity</DetailHeader>
                                            <DetailHeader>Price</DetailHeader>
                                            <DetailHeader>Dispatch Status</DetailHeader>
                                          </CartDetails>                                   
                                          {
                                            Object.entries(this.props.decoCartItems).map(([key, val]) => 
                                            <CartDetails key={key}>
                                              <BookingDetail>{this.props.decoCartItems[key].name}</BookingDetail>
                                              <BookingDetail>N/A</BookingDetail>
                                              <BookingDetail>{this.props.decoCartItems[key].quantity}</BookingDetail>
                                              <BookingDetail>{this.props.decoCartItems[key].price}</BookingDetail>
                                              <BookingDetail>{status}</BookingDetail>
                                              <Tooltip title="Cancel Booking" aria-label="add"><BookingDetail onClick = {() => this.props.clearDecoItem(this.props.decoCartItems[key])} style = {{"cursor": "pointer","alignItems": "left"}}>&#10005;</BookingDetail></Tooltip>
                                            </CartDetails>
                                              )                        
                                          }  
                                          <p style = {{"textAlign" : "center", "marginBottom" : "10px"}}><CustomButton  style = {{"background": "#e91e63"}} onClick={() => {this.props.history.push('/checkout');this.showPopup();}}>Go to Checkout</CustomButton></p>                      
                                  </div>  
                                  
                                : <ContentTitle> No Previous Bookings<span><hr width="300"/></span> </ContentTitle>
                              
                              : 
                              <div>  
                                <ContentTitle> Sign IN/UP <span><hr width="300"/></span> </ContentTitle>
                                <br/>
                                <DetailHeader>Why?</DetailHeader>
                                <TCList>
                                    <br/>
                                        <li>View items in cart.</li>
                                        <li>Remove some items in cart if need be.</li>
                                        <li>Check dispatch status of items paid for.</li>
                                </TCList>
                                <br/>
                                <br/>
                                <br/>
                                <p style = {{"textAlign" : "center"}}><CustomButton  onClick = {this.showPopupSignIn.bind(this)} style = {{"marginTop" : "12.5px", "background": "#e91e63"}} >Sign In/Up</CustomButton></p>     
 
                              </div>
                            }

                            </div>

                          )
                        },
                        {
                          tabButton: "Promotions",
                          tabIcon: GiStarsStack,
                          tabContent: (
                          <div>
                            { this.props.currentUser ? 
                              <div style = {{"marginTop": "-5px"}}>
                                    <ContentTitle> Details <span><hr width="300"/></span> </ContentTitle> 

                                    <DetailHeader>Promo Code : {PromoCode}</DetailHeader>

                                    <TCList>
                                        <li>Use Promo Code for your next booking.</li>
                                        <li>Get 20% on booking.</li>
                                    </TCList>
                                    <br/>

                                    <DetailHeader>Friend Referal Code : {FriendCode}</DetailHeader>
                                    <TCList>
                                        <li>Refer 3 friends to book with us, using the Code.</li>
                                        <li>Friend's successful booking attracts 20% discount on 1st booking.</li>
                                        <li>You get 50% discount for 3 successful friends referrals.</li>
                                    </TCList>
                              </div>
                              : 
                              <div>  
                                <ContentTitle> Sign IN/UP <span><hr width="300"/></span> </ContentTitle>
                                <br/>
                                <DetailHeader>Why?</DetailHeader>
                                <TCList>
                                    <br/>
                                        <li>View customised promotion discounts.</li>
                                        <li>Get 20% discount coupon for two referrals.</li>
                                        <li>Get promotion discount for your next order.</li>
                                </TCList>
                                <br/>
                                <br/>
                                <br/>
                                <p style = {{"textAlign" : "center"}}><CustomButton  onClick = {this.showPopupSignIn.bind(this)} style = {{"marginTop" : "12.5px", "background": "#e91e63"}} >Sign In/Up</CustomButton></p>     
 
                              </div>
                            }

                            </div>

                          )
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer>
                </TabsContainer>
                </PopupInner>  
                {this.state.showPopupSignIn ?
                    <SignIn showPopupSignIn = {this.state.showPopupSignIn} closePopupSignIn = {this.showPopupSignIn.bind(this)} currentUser = {this.props.currentUser}/>
                    : null
                }
            </Popup> 
          : null}</div>
        );  
    }  
}  

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  clearDecoItem: item => dispatch(clearDecoItemFromCart(item))
});

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems,
  decoCartItems: selectDecoCartItems,
  currentUser : selectCurrentUser
});



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Bookings));

/*  <ContentTitle> Services Rating
    <span><hr width="300"/></span>
    </ContentTitle>   */
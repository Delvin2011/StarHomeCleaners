import React from 'react';  
import {Popup,PopupInner,ContentTitle,CloseButton,TabsContainer,DetailHeader,Details,BookingDetail,TCList} from './bookings-styles'; 
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; //bcoz we gonna be pulling stufff off the state

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";
import Tooltip from '@material-ui/core/Tooltip';
import {GiRead} from 'react-icons/gi';
import {GiStarsStack} from 'react-icons/gi';

import {selectCartItems} from '../../redux/cart/cart-selectors';
import { clearItemFromCart } from '../../redux/cart/cart-actions';
import {selectCurrentUser} from '../../redux/user/user-selectors';
import SignIn from '../sign-in/sign-in';
import CustomButton from "../CustomButtons/Button";
class Bookings extends React.Component {  
 
    constructor(props){
        super(props);  
        this.state = {
          showPopupSignIn: false
        } 

    }

    showPopupSignIn(event) {
      this.setState({
          showPopupSignIn: !this.state.showPopupSignIn
      });
    }


render() {  
const status = "Pending";
console.log(this.props.currentUser);
return (          
            <Popup>  
                <PopupInner> 
                <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closePopup} >&#10005;</CloseButton>
                <TabsContainer >                  
                <GridContainer >
                  <GridItem  >
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

                                <div style = {{"margin-top": "-5px"}}>
                                      <ContentTitle> Details
                                      <span><hr width="300"/></span>
                                      </ContentTitle>   


                                      <Details>
                                        <DetailHeader>Booking Date</DetailHeader>
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
                                            <BookingDetail>{this.props.cartItems[key].service}</BookingDetail>
                                            <BookingDetail>{this.props.cartItems[key].service}</BookingDetail>
                                            <BookingDetail>{this.props.cartItems[key].frequency}</BookingDetail>
                                            <BookingDetail>{status}</BookingDetail>
                                            <BookingDetail>{this.props.cartItems[key].payment}</BookingDetail>
                                            <Tooltip title="Cancel Booking" aria-label="add"><BookingDetail onClick = {() => this.props.clearItem(this.props.cartItems)} style = {{"cursor": "pointer","align-items": "left"}}>&#10005;</BookingDetail></Tooltip>
                                          </Details>
                                        )                                    
                                      }

                                      <ContentTitle> Services Rating
                                      <span><hr width="300"/></span>
                                      </ContentTitle>                           
                                    
                                  </div>

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
                                <p style = {{"textAlign" : "center"}}><CustomButton  onClick = {this.showPopupSignIn.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Sign In</CustomButton></p>     
 
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
                              <div style = {{"margin-top": "-5px"}}>
                                    <ContentTitle> Details <span><hr width="300"/></span> </ContentTitle> 
  
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
                                <p style = {{"textAlign" : "center"}}><CustomButton  onClick = {this.showPopupSignIn.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} >Sign In</CustomButton></p>     
 
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

        );  
    }  
}  

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
});

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems,
  currentUser : selectCurrentUser
});



export default connect(mapStateToProps,mapDispatchToProps)(Bookings);
import React from 'react';  
import {Popup,PopupInner,Button,LogoContainer,CloseButton,TCList,Heading,Details,Title} from './serviceInfoStyles';
import Logo from '../../assets/img/logo1.png';
import CustomButton from "../CustomButtons/Button";
import SignIn from '../sign-in/sign-in';
import Indoor from './indoor/indoor';
import Outdoor from './outdoor/outdoor';
import Pool from './pool/pool';

class PromptSinIn extends React.Component {  
    constructor(props){
        super(props);   
        this.state = {
            customerName: '',
            showPopupSignIn: false,
            showPopupIndoor: false,
            showPopupOutdoor: false,
            showPopupPool: false
        }
    }

    showPopupSignIn(event) {
        this.setState({
            showPopupSignIn: !this.state.showPopupSignIn
        });
      }

    showPopupIndoor(event) {
        this.setState({
            showPopupIndoor: !this.state.showPopupIndoor
        });
      }

      showPopupOutdoor(event) {
        this.setState({
            showPopupOutdoor: !this.state.showPopupOutdoor
        });
      }

      showPopupPool(event) {
        this.setState({
            showPopupPool: !this.state.showPopupPool
        });
      }

//https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/integration-with-json/
  render() {  
        return (  
           
            <Popup>  
                <PopupInner>                   
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closePopup} >&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />
                        <Title>Sign In/Up</Title>
                        <Heading>Why?</Heading>
                        <Details style = {{borderBottom:"none"}}>
                                    <TCList>
                                    <br/>
                                        <li>Get customised service.</li>
                                        <li>Accumulate loyalty points.</li>
                                        <li>Get discounts on bookings.</li>
                                    </TCList>

                                    <TCList>
                                    <br/>
                                        <li>Fill in less details on bookings.</li>
                                        <li>Get alerted of specials on offer.</li>
                                        <li>Save money on bookings overtime.</li>
                                    </TCList>
                        </Details>
                        <br/>
                        {this.props.currentUser ?
                            <p style = {{"textAlign" : "center"}}><CustomButton  onClick = {this.showPopupSignIn.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Proceed</CustomButton></p>     
                            : 
                            <p style = {{"textAlign" : "center"}}><CustomButton  onClick = {this.showPopupSignIn.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Sign In</CustomButton></p>     
                        }   
                        <br/>
                        <br/>
                        <br/>
                        <Heading>Otherwise!</Heading>
                        <Title>Proceed as Guest</Title>
                        <br/>
                        <br/>
                        <br/>
                        {this.props.showPopupIndoor?
                            <p style = {{"textAlign" : "center"}}><CustomButton  onClick= {this.showPopupIndoor.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Proceed</CustomButton></p>     
                            : this.props.showPopupOutdoor?
                                <p style = {{"textAlign" : "center"}}><CustomButton  onClick= {this.showPopupOutdoor.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Proceed</CustomButton></p>     
                            : this.props.showPopupPool?
                                <p style = {{"textAlign" : "center"}}><CustomButton  onClick= {this.showPopupPool.bind(this)} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Proceed</CustomButton></p>
                                :null
                        }

                </PopupInner>  

                {this.state.showPopupSignIn ?
                    <SignIn showPopupSignIn = {this.state.showPopupSignIn} closePopupSignIn = {this.showPopupSignIn.bind(this)}/>
                    : null
                }
                
                {this.state.showPopupIndoor ?
                    <Indoor showPopupIndoor = {this.state.showPopupIndoor} closePopupSignIn = {this.showPopupSignIn.bind(this)} closePopup={this.props.closePopup} dateTime = {this.props.dateTime} totalIndoor = {this.props.totalIndoor} genIndoorCleanWallsService = {this.props.genIndoorCleanWallsService} genIndoorCleanWindowsService = {this.props.genIndoorCleanWindowsService} genIndoorCleanLaundryService = {this.props.genIndoorCleanLaundryService} afterBuildIndoorCleanWallsService = {this.props.afterBuildIndoorCleanWallsService} serviceIntervalIndoor = {this.props.serviceIntervalIndoor} 
                afterBuildIndoorCleanWindowsService = {this.props.afterBuildIndoorCleanWindowsService} endTenancyIndoorCleanWallsService = {this.props.endTenancyIndoorCleanWallsService} endTenancyIndoorCleanWindowsService = {this.props.endTenancyIndoorCleanWindowsService} bedRooms = {this.props.bedRooms} bathRooms = {this.state.bathRooms} IndoorCleanService = {this.props.IndoorCleanService} IndoorAfterBuildCleanService = {this.props.IndoorAfterBuildCleanService} IndoorEndTenancyCleanService = {this.props.IndoorEndTenancyCleanService} IndoorSanitiseService = {this.props.IndoorSanitiseService}/>
                    : null
                }

                {this.state.showPopupPool ?
                    <Outdoor showPopupOutdoor = {this.state.showPopupOutdoor} closePopupSignIn = {this.showPopupSignIn.bind(this)} closePopup={this.props.closePopup} dateTime = {this.props.dateTime} total = {this.props.total} time = {this.props.time} wheelbarrow = {this.props.wheelbarrow} mower = {this.props.mower} windows = {this.props.windows} box = {this.props.box}/>
                    : null
                }

                {this.state.showPopupOutdoor ?
                    <Pool showPopupOutdoor = {this.state.showPopupOutdoor} closePopupSignIn = {this.showPopupSignIn.bind(this)} closePopup={this.props.closePopup} dateTime = {this.props.dateTimePool} total = {this.props.totalPool} time = {this.props.poolHrs} poolCleaning = {this.props.PoolCleanService} poolMaintanence = {this.props.PoolMaintService} serviceInterval = {this.props.serviceInterval}/>
                    : null
                }
            </Popup>
              
        );  
    }  
}  


export default PromptSinIn;

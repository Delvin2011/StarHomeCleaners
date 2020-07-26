import React from 'react';  
import {Popup,PopupInner,Button,LogoContainer,CloseButton,TCList,Heading,Details,Title} from '../serviceInfoStyles'; 
import Logo from '../../../assets/img/logo1.png';
import CustomButton from "../../CustomButtons/Button";

class OutdoorServicesInfo extends React.Component {  
    constructor(props){
        super(props);   
        this.state = {
            customerName: ''
        }
    }

//https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/integration-with-json/
  render() {  
        return (  
            <Popup>  
                <PopupInner>                   
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closeOutdoorServiceInfo} >&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />
                        <Title> Outdoor Services</Title>
                        <Details style = {{"border-bottom":"none"}}>
                        <div>
                        <Heading>Yard Cleaning</Heading>
                            <TCList>
                                <li>Cleaning up after the construction.</li>
                                <li>Cleaning up after a party.</li>
                                <li>Pruning and trimming trees and shrubs.</li>
                                <li>Clearing away leaves, branches, and clutter.</li>
                                <li>Weed Control.</li>
                                <li>CRaking up leaves and composting them.</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Lawn Mowing</Heading>
                            <TCList>
                                <li>Cutting overgrown grass lawn.</li>
                                <li>Keeping the lawn green.</li>
                                <li>Weed Control.</li>
                                <li>Composting & manure.</li>
                                <li>Cleaning up lawn debris.</li>
                                <li>Lawn soil aeration.</li>
                            </TCList> 
                            </div> 
                        </Details>
                        <Details>
                        <div>
                        <Heading>Flower Bedding</Heading>
                            <TCList>
                                <li>Mend flower beds & ridges.</li>
                                <li>Plant new flowers.</li>
                                <li>Remove weeds.</li>
                                <li>Trim flowers.</li>
                                <li>Soil aeration & watering.</li>
                                <li>Adding manure & compost.</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Driveway Cleaning</Heading>
                            <TCList>
                                <li>High pressure cleaning.</li>
                                <li>Weed Control.</li>
                                <li>Wiping appliances.</li>
                                <li>Insects control.</li>
                                <li>Repair dipped or cracked paving.</li>
                                <li>Degrease pavements.</li>
                            </TCList> 
                            </div> 
                        </Details>   
                        <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' onClick= {this.props.closeOutdoorServiceInfo} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Close</CustomButton></p>     
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


export default OutdoorServicesInfo;

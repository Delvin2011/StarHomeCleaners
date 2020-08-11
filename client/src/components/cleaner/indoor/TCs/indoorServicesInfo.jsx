import React from 'react';  
import {Popup,PopupInner,Button,LogoContainer,CloseButton,TCList,Heading,Details,Title} from '../../serviceInfoStyles'; 
import Logo from '../../../../assets/img/logo1.png';
import CustomButton from "../../../CustomButtons/Button";

class IndoorServicesInfo extends React.Component {  
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
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closeServiceInfo} >&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />
                        <Title> Cleaning Services</Title>
                        <Details style = {{borderBottom:"none"}}>
                        <div>
                        <Heading>General Cleaning</Heading>
                            <TCList>
                                <li>Sweeping floors.</li>
                                <li>Vacuuming carpets.</li>
                                <li>Wiping appliances & cupboards/cabinets.</li>
                                <li>Dusting furniture.</li>
                                <li>Washing dishes.</li>
                                <li>Disinfect surfaces.</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>After Builders Cleaning</Heading>
                            <TCList>
                                <li>Remove build-up dust on furniture.</li>
                                <li>Empty bins.</li>
                                <li>Clean paint splatters.</li>
                                <li>Clean putty on windows.</li>
                                <li>Remove all dust and debris thoroughly.</li>
                                <li>Tile cleaning & grease removal.</li>
                            </TCList> 
                            </div> 
                        </Details>
                        <Details>
                        <div>
                        <Heading>End Of Tenancy Cleaning</Heading>
                            <TCList>
                                <li>Empty & clean cupboards.</li>
                                <li>Remove stains on sink, bath, toilet, tiles.</li>
                                <li>Check plug holes and drains for blockage.</li>
                                <li>Remove grime from fitted ovens.</li>
                                <li>Clean walls & windows & doors.</li>
                                <li>Empty bins.</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Antiviral Sanitisation</Heading>
                            <TCList>
                                <li>Disinfect hard surfaces.</li>
                                <li>Prevent spread of bacteria, viruses.</li>
                                <li>Fumigation for pest control.</li>
                                <li>Sanitise couches, carpets, mattress.</li>
                            </TCList> 
                            </div> 
                        </Details>   
                        <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' onClick= {this.props.closeServiceInfo} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Close</CustomButton></p>     
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


export default IndoorServicesInfo;

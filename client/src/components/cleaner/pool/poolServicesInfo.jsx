import React from 'react';  
import {Popup,PopupInner,Button,LogoContainer,CloseButton,TCList,Heading,Details,Title} from '../serviceInfoStyles'; 
import Logo from '../../../assets/img/logo1.png';
import CustomButton from "../../CustomButtons/Button";

class PoolServicesInfo extends React.Component {  
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
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closePoolServiceInfo} >&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />
                        <Title> Pool Services</Title>
                        <Details style = {{"border-bottom":"none"}}>
                        <div>
                        <Heading>General Pool Cleaning</Heading>
                            <TCList>
                                <li>Dusting all accessible surfaces.</li>
                                <li>Wiping mirrors and glass fixtures.</li>
                                <li>Wiping appliances.</li>
                                <li>Folding clothes and arranging things.</li>
                                <li>Wiping doors, door handles and switches.</li>
                                <li>Cleaning lighting appliances and chandeliers.</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Pool Maintanance</Heading>
                            <TCList>
                                <li>Dusting all accessible surfaces.</li>
                                <li>Wiping mirrors and glass fixtures.</li>
                                <li>Wiping appliances.</li>
                                <li>Folding clothes and arranging things.</li>
                                <li>Wiping doors, door handles and switches.</li>
                                <li>Cleaning lighting appliances and chandeliers.</li>
                            </TCList> 
                            </div> 
                        </Details>
                        <Details>
                        <div>
                        <Heading>Pool Repairs</Heading>
                            <TCList>
                                <li>Dusting all accessible surfaces.</li>
                                <li>Wiping mirrors and glass fixtures.</li>
                                <li>Wiping appliances.</li>
                                <li>Folding clothes and arranging things.</li>
                                <li>Wiping doors, door handles and switches.</li>
                                <li>Cleaning lighting appliances and chandeliers.</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Driveway Cleaning</Heading>
                            <TCList>
                                <li>Dusting all accessible surfaces.</li>
                                <li>Wiping mirrors and glass fixtures.</li>
                                <li>Wiping appliances.</li>
                                <li>Folding clothes and arranging things.</li>
                                <li>Wiping doors, door handles and switches.</li>
                                <li>Cleaning lighting appliances and chandeliers.</li>
                            </TCList> 
                            </div> 
                        </Details>   
                        <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' onClick= {this.props.closePoolServiceInfo} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Close</CustomButton></p>     
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


export default PoolServicesInfo;

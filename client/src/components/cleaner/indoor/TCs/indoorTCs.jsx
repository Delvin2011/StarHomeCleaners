import React from 'react';  
import {Popup,PopupInner,Button,LogoContainer,CloseButton,TCList,Heading} from './indoorTCs-styles'; 

class IndoorTCs extends React.Component {  
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
                        <CloseButton className = 'remove-button' onClick = {this.props.closeTcIn} >&#10005;</CloseButton>  
                        <LogoContainer src="https://i.ibb.co/Ln0mXVc/logo.png"/>   
                        <Heading> Featured Services</Heading>
                        <TCList>
                            <li>Dusting all accessible surfaces.</li>
                            <li>Wiping mirrors and glass fixtures.</li>
                            <li>Wiping appliances.</li>
                            <li>Folding clothes and arranging things.</li>
                            <li>Wiping doors, door handles and switches.</li>
                            <li>Cleaning lighting appliances and chandeliers.</li>
                            <li>Vacuum cleaning of the carpets and washing the floor and skirting boards.</li>
                            <li>Taking out rubish.</li>
                        </TCList>
                        <Button onClick = {this.props.closeTcIn}> CLOSE</Button>            
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


export default IndoorTCs;

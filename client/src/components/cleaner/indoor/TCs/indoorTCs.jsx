import React from 'react';  
import {Popup,PopupInner,Button,LogoContainer,CloseButton,TCList,Heading,Details,Title} from '../../serviceInfoStyles';
import Logo from '../../../../assets/img/logo1.png';
import CustomButton from "../../../CustomButtons/Button";

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
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closeTcIn} >&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />
                        <Title>Standard Services Offered</Title>
                        <Details style = {{"border-bottom":"none"}}>
                        <div>
                        <Heading>Kitchen</Heading>
                            <TCList>
                                <li>Empting trash cans/bins.</li>
                                <li>Clean counter tops, sinks, and cupboards.</li>
                                <li>Clean stove & microwave & fridge.</li>
                                <li>Clean tables and chairs.</li>
                                <li>Washing dishes.</li>
                                <li>Cleaning floors & walls & windows.</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Living Area</Heading>
                            <TCList>
                                <li>Dusting electronic gadgets.</li>
                                <li>Cleaning wall electrical switches.</li>
                                <li>Dusting furniture & wall frames.</li>
                                <li>Vacuum & mop floors surfaces.</li>
                                <li>Clean interior windows.</li>
                                <li>Dusting sofas.</li>
                            </TCList> 
                            </div> 
                        </Details>
                        <Details>
                        <div>
                        <Heading>Bathroom</Heading>
                            <TCList>
                                <li>Clean counters & cabinets.</li>
                                <li>Wiping & shining mirrors.</li>
                                <li>Clean & disinfect toilet seats.</li>
                                <li>Clean & disinfect shower & bathtub.</li>
                                <li>Clean interior windows & sills.</li>
                                <li>Mopping floors & empty bins.</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Bedroom</Heading>
                            <TCList>
                                <li>Vacuum carpets or mop floors.</li>
                                <li>Make beds.</li>
                                <li>Fold clothes.</li>
                                <li>Dusting furniture.</li>
                                <li>Clean interior windows.</li>
                                <li>Arrange wardrope on request.</li>
                            </TCList> 
                            </div> 
                        </Details>   
                        <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' onClick= {this.props.closeTcIn} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Close</CustomButton></p>     
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


export default IndoorTCs;

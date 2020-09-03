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
                        <Details style = {{borderBottom:"none"}}>
                        <div>
                        <Heading>General Pool Cleaning</Heading>
                            <TCList>
                                <li>Inspect and clean the pool deck.</li>
                                <li>Clean thoroughly and vacuum the pool.</li>
                                <li>Visually inspect clarity of pool water, color and visible contaminants.</li>
                                <li>Testing and balancing of pool chemicals.</li>
                                <li>Remove and clean and the pool cover.</li>
                                <li>Netting any visible debris (e.g. leaves, twiggs, plastics etc).</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Periodic Pool Maintanance</Heading>
                            <TCList>
                                <li>Ensure the water level is high enough for the pump to function correctly.</li>
                                <li>Test and adjust the pool water pH.</li>
                                <li>Test chlorine levels in the pool water.</li>
                                <li>Visually inspect tile, grout, sealant, and other exposed elements of pool.</li>
								<li>Netting any visible debris (e.g. leaves, twiggs, plastics etc).</li>
								<li>Cleaning of skimmer bag, weir and baskets to remove all debris.</li>
                                <li>Routine inspection of all pool equipment & recommending pool repairs.</li>
								<li>Backwashing and rinse of the filter.</li>
                            </TCList> 
                            </div> 
                        </Details>
                        <Details>
                        <div>
                        <Heading>Pool Repairs</Heading>
                            <TCList>
                                <li>Coming Soon!!!</li>
                            </TCList>
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            </div> 
                        </Details>   
                        <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' onClick= {this.props.closePoolServiceInfo} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Close</CustomButton></p>     
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


export default PoolServicesInfo;

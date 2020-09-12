import React from 'react';  
import {Popup,PopupInner,Button,LogoContainer,CloseButton,TCList,Heading,Details,Title,PoolShapeContainer} from '../serviceInfoStyles'; 
import Logo from '../../../assets/img/logo1.png';
import Circular from '../../../assets/img/Circular.png';
import Irregular from '../../../assets/img/Irregular.png';
import Rectangular from '../../../assets/img/Rectangular.png';
import Triangle from '../../../assets/img/Triangle.png';
import CustomButton from "../../CustomButtons/Button";

class PoolShapes extends React.Component {  
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
                        <CloseButton className = 'remove-button' style = {{"color":"black"}} onClick = {this.props.closePoolShapes} >&#10005;</CloseButton>  
                        <LogoContainer src= {Logo} />
                        <Title> Pool Shapes</Title>
                        <Details style = {{borderBottom:"none"}}>
                            <div>
                            <Heading>Rectangular</Heading>
                            <PoolShapeContainer src= {Rectangular} />
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Circular</Heading>
                            <PoolShapeContainer src= {Circular} /> 
                            </div> 
                        </Details>
                        <Details>
                        <div>
                            <Heading>Triangular</Heading>
                            <PoolShapeContainer src= {Triangle} />
                            </div>
                            <div  style = {{"border-left":"thin solid silver"}}>
                            <Heading>Irregular</Heading>
                            <PoolShapeContainer src= {Irregular} /> 
                            </div> 
                        </Details>   
                        <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' onClick= {this.props.closePoolShapes} style = {{"margin-top" : "12.5px", "background": "#e91e63"}}>Close</CustomButton></p>     
                </PopupInner>  
            </Popup>  
        );  
    }  
}  


export default PoolShapes;

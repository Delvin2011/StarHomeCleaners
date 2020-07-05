import styled from 'styled-components';
//import CustomButton from '../../custom-button/custom-button';
import CustomButton from '../../../custom-button/custom-button';
//import {Link} from 'react-router-dom';

export const Button = styled(CustomButton)`
    position: center;
    margin: auto; 
    display: flex;
    align-items: center;
    justify-content: center; 
`;


export const LogoContainer = styled.img`
      height: 50px;
      width: 180px;
      display: block;
      margin-top: -30px;
        margin-left: auto;
        margin-right: auto;

      @media screen and (max-width: 800px){
       width: auto;
       padding: 0;  
       height: 45px;
       width: 180px; 
    }
`;

export const Popup = styled.div`
    position: fixed;  
    width: 100%;  
    height: 100%;  
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 10%;  
    margin: auto;  
    background-color: rgba(0,0,0, 0.5);
    z-index:5; 

    @media screen and (max-width: 800px){
        width: 100%;  
        height: 100%;
    }
`;

export const PopupInner = styled.div`
    position: absolute;  
    left: 40%;  
    right: 40%;  
    top: 20%;  
    bottom: 25%;  
    margin: auto;  
    border-radius: 10px;  
    background: white;
    @media screen and (max-width: 800px){
        left: 10%;  
        right: 10%;  
        top: 10%;  
        bottom: 10%;
 
    }
`;


export const CloseButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    margin-left: 89.5%;
    margin-top: 2.5%;

    @media screen and (max-width: 800px){
      margin-left: 89.5%;
}
`;

export const TCList = styled.ul`
text-align: left;
color: #4a4a4a;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
letter-spacing: 1px;
font: 12px;
@media screen and (max-width: 800px){
    font: 10px;
}
`;

export const Heading = styled.h3`
    text-align: center;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
    font-weight : bold;
`;
import styled from 'styled-components';
import CustomButton from "../custom-button/custom-button";
//import {Link} from 'react-router-dom';

export const Button = styled(CustomButton)`
    position: center;
    margin: auto; 
    display: flex;
    align-items: center;
    justify-content: center; 
`;


export const LogoContainer = styled.img`
      height: 70px;
      width: 70px;
      display: block;
      margin-top: -20px;
        margin-left: auto;
        margin-right: auto;

      @media screen and (max-width: 800px){
       width: auto;
       padding: 0;  
       height: 60px;
       width: 60px; 
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
    left: 30%;  
    right: 30%;  
    top: 15%;  
    bottom: 15%;  
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

export const Form = styled.form`
    margin: auto;
    width: 80%;

    .title {
        margin: 10px 0;
    }

    @media screen and (max-width: 800px) {
        width: 70%;
    }

`;

export const SignInNotifier = styled.div`
    margin: auto;
    width: 80%;
    font-size:medium;
    top: 25%;  
    bottom: 25%;  
    text-align: center;
`;


export const CloseButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    margin-left: 92.5%;
    margin-top: 2.5%;
    @media screen and (max-width: 800px) {
        margin-left: 88.5%;
    }
`;

export const Response = styled.h3`
    text-align: center;
    color: #00c400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1px;
`;

export const Errors = styled.h3`
    text-align: center;
    color: red;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 1px;
`;

export const ContactEntries = styled.div`
    display: grid;  
    grid-template-columns: 50% 50%;
    
    @media screen and (max-width: 800px){
        grid-template-columns: 50% 1fr;
        grid-template-rows: 20px 10px;
    }
    
`;

export const Price = styled.div`
text-align: right;
font: black;
z-index: 5;
border: thick solid;
`;







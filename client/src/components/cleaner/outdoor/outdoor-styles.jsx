import styled from 'styled-components';
import CustomButton from '../../custom-button/custom-button';
import { css } from 'styled-components';
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
    left: 25%;  
    right: 25%;  
    top: 10%;  
    bottom: 5%;  
    margin: auto;  
    border-radius: 10px;  
    background: white;
    @media screen and (max-width: 800px){
        left: 2%;  
        right: 2%;  
        top: 10%;  
        bottom: 5%;
 
    }

    @media screen and (max-width: 1600px){ 
        top: 14%;  
        bottom: -3%;
    }
`;

export const Form = styled.form`
    margin: auto;

    .title {
        margin: 10px 0;
    }

    @media screen and (max-width: 800px) {
        width: 95%;
        font-size: 12px; 
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

    @media screen and (max-width: 800px){
      margin-left: 89.5%;
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

export const BookingDetails = styled.div`
  & > p {
      font-size: 25px;
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      justify-content: center;
      text-align: center;
  }
  @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`;

export const Contacts = styled.h2`
    margin-top: 10px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2.5px;
    margin-bottom: 3px;
    font-size: 12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
    @media screen and (max-width: 800px) {
        font-size: 14px;
        letter-spacing: 2.5px;
    }
`;




export const Name = styled.h1`
    margin-top: 25px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 6px;
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
    @media screen and (max-width: 800px) {
        font-size: 18px;
        letter-spacing: 2.5px;
    }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 2px;
  justify-items: left;
  border: thin  solid silver;
`;



const r = css`
color: red;
background-color: white;
`;

const y = css`
color: white;
background-color: red;

`;
const howOften = props => {
  if (props.option) {
    return y;
  }
  else
  return r;
};


export const Button2 = styled.button`
 border-style: : solid;
  background-color: red;
  border-width: thin;}
  color: white;
  padding: 12px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  ${howOften};
`;

export const Message4 = styled.h2`
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: left;
    color: #4a4a4a;
    letter-spacing: 2px;
    margin-left: 50px;
    line-height: 2px;
    @media screen and (max-width: 800px){
        margin-left: 15px;
        font-size: 12px;
        line-height: 1px;
        letter-spacing: 1px;
    }

    @media screen and (max-width: 1600px){ 
        line-height: 1px;
    }

`;

export const Right = styled.div`
    border-left: thin solid silver;

`;



export const ContentTitle = styled.h1`
    text-transform: uppercase;
    margin-top: 10px;
    letter-spacing: 1.8px;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: left;
    color: #4a4a4a;
    margin-left: 20px;
    line-height: 2px;

    @media screen and (max-width: 1600px){ 
        line-height: 1.5px;
    }

    @media screen and (max-width: 800px){
        margin-left: 10px;
        letter-spacing: 1px;
        font-size: 12px;
        line-height: 1px;
    }
`;



export const Title = styled.h1`
    margin-top: 8px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
`;


export const Test = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2px;
  justify-items: center;
`;

export const MessageTest = styled.h2`
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: left;
    color: #4a4a4a;
    letter-spacing: 2px;
    @media screen and (max-width: 800px){
        letter-spacing: 1px;
    }
`;
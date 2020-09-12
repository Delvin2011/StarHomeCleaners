import styled from 'styled-components';
//import CustomButton from '../../custom-button/custom-button';
//import CustomButton from '~/custom-button/custom-button';
//import {Link} from 'react-router-dom';



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

export const PoolShapeContainer = styled.img`
      height: 75%;
      width: 75%;
      display: block;
      margin-top: 5px;
        margin-left: auto;
        margin-right: auto;

      @media screen and (max-width: 800px){
       padding: 0;  
       height: 61%;
       width: 61%; 
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
        left: 2.5%;  
        right: 2.5%;  
        top: 10%;  
        bottom: 5%;
 
    }

    @media screen and (max-width: 1600px){ 
        top: 14%;  
        bottom: -3%;
    }
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


export const TCList = styled.ul`
text-align: left;
color: #4a4a4a;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
letter-spacing: 1.5px;
font-size: 12px;

    & > li {
        line-height: 2;
    }

@media screen and (max-width: 800px){
    font-siz: 10px;
    & > li {
        line-height: 1.2;
        letter-spacing: 1px;
    }
}
`;

export const Heading = styled.h3`
    text-align: center;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
    font-weight : bold;
    @media screen and (max-width: 800px){
    font-size: 12px;
}
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 2px;
  justify-items: left;
  border: thin  solid silver;
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

    @media screen and (max-width: 800px){
    font-size: 12px;
}
`;
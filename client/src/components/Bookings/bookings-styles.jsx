import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';
import Tabs from 'react-bootstrap/Tabs';


export const ContentTitle = styled.h1`
    margin-top: 8px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
    @media screen and (max-width: 800px){
      letter-spacing: 1.5px;
      font-size: 14px;  
      margin-top: 3px;
    }
`;





export const LogoContainer = styled.img`
      height: 70px;
      width: 250px;
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



export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2px;
  justify-items: center;
  text-align: center;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @media screen and (max-width: 800px){

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
    left: 20%;  
    right: 20%;  
    top: 10%;  
    bottom: 5%;  
    margin: auto;  
    border-radius: 10px;  
    background: white;
    
    @media screen and (max-width: 800px){
        left: 1.5%;  
        right: 1.5%;  
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
    z-index: 15;

    @media screen and (max-width: 800px){
      margin-left: 89.5%;
}
`;

export const TabsContainer = styled.div`
    justifyContent: center;
    alignItems: center; 
    margin-left: 10%;
    margin-right: 10%;
    margin-top: -10px;

    @media screen and (max-width: 800px){
    margin-left: 5%;
    margin-right: 5%;
}
`;

export const TabContainer = styled(Tabs)`
    text-align: center;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    bottom: 10px;

    & > .myClass{
      color: red;
    }
    & > .myClass:focus{
      background-color: #F9F9FF;
    }
`;


export const DetailHeader = styled.h3`
    text-align: center;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: left;
    color: #4a4a4a;
    font-weight : bold;
    @media screen and (max-width: 800px){
      font-size: 12px;
}
`;

export const BookingDetail = styled.h3`
    text-align: center;
    font-size: 12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: left;
    color: #4a4a4a;
    @media screen and (max-width: 800px){
      font-size: 12px;
}
`;

export const TCList = styled.ul`
text-align: left;
color: #4a4a4a;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
letter-spacing: 1.5px;
font-size: 14px;

    & > li {
        line-height: 2;
    }

@media screen and (max-width: 800px){
    font-siz: 12px;
    & > li {
        line-height: 2;
        letter-spacing: 1px;
    }
}
`;

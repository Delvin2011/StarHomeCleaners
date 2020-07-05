import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';
import Tabs from 'react-bootstrap/Tabs';
import {Washer} from '@styled-icons/boxicons-solid/Washer';
import { css } from 'styled-components';
import { GiStoneWall } from "react-icons/gi";
import { RiWindowsLine } from "react-icons/ri";
import {GiWheelbarrow} from "react-icons/gi";
import {GiWindow} from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import {GiCottonFlower} from "react-icons/gi";
import { FaRoad } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { Icon } from '@iconify/react';

import { GiFishingNet } from "react-icons/gi";
import {AiTwotoneTool} from "react-icons/ai";
import { TiArrowRepeatOutline } from "react-icons/ti";

// 


//https://github.com/davidchin/react-input-range/issues/115
export const RangeSliderContainer = styled.div`
.input-range__track--active,
.input-range__slider {
  background: ${props => props.color}; 
  border-color: ${props => props.color};
}

width: 100%;
`;

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
      margin-top: 4px;
    }
`;

export const Message4 = styled.h1`
    text-align: center;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
    font-weight : bold;
`;
export const Button = styled(CustomButton)`
    position: center;
    margin: auto;  
    display: flex;
    align-items: center;
    justify-content: center; 
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



export const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2px;
  justify-items: center;
  text-align: center;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @media screen and (max-width: 800px){
      grid-template-columns: repeat(3, 1fr);  
      font-size: 14px;
    }
`;

export const Options5 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2px;
  justify-items: center;
  text-align: center;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @media screen and (max-width: 800px){
      grid-template-columns: 25% 15% 20% 10% 30%; 
      font-size: 12px;
    }

`;

export const Options2 = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2px;
  justify-items: center;
`;

export const Options3 = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr 1fr;
  grid-gap: 0px;
  justify-items: center;
  border: thin solid silver;

  @media screen and (max-width: 800px){
      margin-left: 2px;  
      margin-right: 2px; 
    }
`;

export const Options4 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2px;
  justify-items: center;
`;

export const Options3p1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
  justify-items: center;
`;

/* margin-bottom: 200px;
  grid-row-gap: 200px;
   grid-template-rows: 50px 50px;
*/
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
    z-index: 15;

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
//#00d800;
export const PricingContainer = styled.div`
  align: center;
  display: grid;
  background-color: #F9F9FF;
  background-position: cover;
  margin-top: 10px;
`;

export const ServicePrice = styled.div`
    display: grid;  
    grid-template-columns: 85% 1fr;
    
`;
//grid-template-columns: repeat(2, 1fr);
export const Service = styled.div`
text-align: left;
color: #4a4a4a;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
letter-spacing: 1.5px;
`;

export const Price = styled.div`
text-align: right;
color: #4a4a4a;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
letter-spacing: 1px;
`;

const r = css`
color: red;
`;

const y = css`
color: yellow;
`;
const picks = props => {
  if (props.picked) {
    return y;
  }
  else
  return r;
};

const picks2 = props => {
  if (props.picked2) {
    return y;
  }
  else
  return r;
};

const picks3 = props => {
  if (props.picked3) {
    return y;
  }
  else
  return r;
};

const picks4 = props => {
  if (props.picked4) {
    return y;
  }
  else
  return r;
};

const picks5 = props => {
  if (props.picked5) {
    return y;
  }
  else
  return r;
};

const picks6 = props => {
  if (props.picked6) {
    return y;
  }
  else
  return r;
};

const picks7 = props => {
  if (props.picked7) {
    return y;
  }
  else
  return r;
};

const picks8 = props => {
  if (props.picked8) {
    return y;
  }
  else
  return r;
};

const picks9 = props => {
  if (props.picked9) {
    return y;
  }
  else
  return r;
};

const PoolClean = props => {
  if (props.PoolClean) {
    return y;
  }
  else
  return r;
};

const PoolMaint = props => {
  if (props.PoolMaint) {
    return y;
  }
  else
  return r;
};

export const Wall = styled(GiStoneWall)`
  color: red;
  width: 42px;
  height: 42px;
  justify-items: center;
  cursor: pointer;
  ${picks};
  @media screen and (max-width: 800px){
    width: 40px;
    height: 40px;
}
`;


export const Item = styled.div`
  display: grid;
  justify-content: center;
  padding: 0.7rem;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  grid-gap: 40px;
  justify-items: center;
  

  & > h3 {
      visibility: hidden;
      margin-top: -30px;
      justify-content: center;
    }


  &:hover {

      & > h3 {
      
      visibility: visible;      
      justify-content: center;
      font-size: 18px;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 1px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        @media screen and (max-width: 800px){
          font-size: 12px;
      }
    }


  }
`;


export const Window = styled(RiWindowsLine)`
  color: red;
  width: 50px;
  height: 50px;
  justify-items: center;
  cursor: pointer;
  ${picks2};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const Machine = styled(Washer)`
  color: red;
  width: 50px;
  height: 50px;
  justify-items: center;
  cursor: pointer;
  ${picks3};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const Stove = styled(Icon)`
  color: red;
  font-size: 38px;
  justify-items: center;
  cursor: pointer;
  ${picks4};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const Wardrobe = styled(Icon)`
  color: red;
  font-size: 48px;
  justify-items: center;
  cursor: pointer;
  ${picks5};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;


export const Fridge = styled(Icon)`
  color: red;
  font-size: 50px;
  justify-items: center;
  cursor: pointer;
  ${picks6};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;






export const Message = styled.h2`  
text-transform: uppercase; 
    letter-spacing: 1.25px;
    font-size: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
    
    @media screen and (max-width: 800px) {
        font-size: 10px;
        letter-spacing: 1.25px;
        text-transform: none; 
    }

    @media screen and (max-width: 1600px){ 
        line-height: 1;
    }
`;

export const Message2 = styled.h2`
    margin-top: 10px;
    text-transform: uppercase;   
    letter-spacing: 1.5px;
    font-size: 12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    color: #4a4a4a;
    
    @media screen and (max-width: 800px) {
        font-size: 12px;
        letter-spacing: 1px;
    }
`;

export const Message3 = styled.h3`
    text-transform: uppercase;   
    letter-spacing: 1.5px;
    font-size: 12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @media screen and (max-width: 800px) {
        font-size: 10px;
        letter-spacing: 1px;
    }
`;



export const Wheelbarrow = styled(GiWheelbarrow)`
  color: red;
  width: 65px;
  height: 65px;
  justify-items: center;
  cursor: pointer;
  ${picks7};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const OutsideWindow = styled(GiWindow)`
  color: red;
  width: 65px;
  height: 65px;
  justify-items: center;
  cursor: pointer;
  ${picks8};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const Box = styled(FaBoxOpen)`
  color: red;
  width: 65px;
  height: 65px;
  justify-items: center;
  cursor: pointer;
  ${picks9};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const Flowers = styled(GiCottonFlower)`
  color: red;
  width: 65px;
  height: 65px;
  justify-items: center;
  cursor: pointer;
  ${picks8};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const Driveway = styled(FaRoad)`
  color: red;
  width: 65px;
  height: 65px;
  justify-items: center;
  cursor: pointer;
  ${picks9};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const Maintanance = styled(TiArrowRepeatOutline)`
  color: red;
  width: 50px;
  height: 50px;
  justify-items: center;
  cursor: pointer;
  ${PoolMaint};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const ServicePool = styled(AiTwotoneTool)`
  color: red;
  width: 50px;
  height: 50px;
  justify-items: center;
  cursor: pointer;
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;

export const Installations = styled(GiFishingNet)`
  color: red;
  width: 50px;
  height: 50px;
  justify-items: center;
  cursor: pointer;
  ${PoolClean};
  @media screen and (max-width: 800px){
    width: 40px;
  height: 40px;
}
`;




export const LogoContainer2 = styled.img`
      height: 60px;
      width: 60px;
      display: block;
      cursor: pointer;

      @media screen and (max-width: 800px){
        width: 40px;
        height: 40px; 
    }
`;


export const Info = styled(BsQuestionCircleFill)`
  color: red;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;


//GiWindow
//  grid-template-columns: repeat(2, 1fr); text-align: left;     
   // 








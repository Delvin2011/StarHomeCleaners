import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: red;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 1px;
  border-radius: 10px;
  border-style: outset;
  position: center;

  &:hover {
    background-color: white;
    color: red;
    border-radius: 2%;
    border-style: outset;
    border-radius: 10px;
    position: center;
  }
`;



export const CustomButtonContainer = styled.button`
  

  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  justify-content: center;
  position: relative;
  
  ${buttonStyles}
`;
import styled from 'styled-components';
import { FaRegCreditCard } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import { css } from 'styled-components';

const rd = css`
color: red;
`;

const yw = css`
color: yellow;
`;


const IndoorCashPayment = props => {
    if (props.IndoorCashPayment) {
      return yw;
    }
    else
      return rd;
  };
  
  const IndoorCardPayment = props => {
    if (props.IndoorCardPayment) {
      return yw;
    }
    else
    return rd;
  };
  
  
  export const CreditCardPayment = styled(FaRegCreditCard)`
    width: 50px;
    height: 50px;
    justify-items: center;
    cursor: pointer;
    ${IndoorCardPayment};
    @media screen and (max-width: 800px){
      width: 40px;
      height: 40px;
  }
  `;
  
  export const CASpayment = styled(IoMdCash)`
    width: 50px;
    height: 50px;
    justify-items: center;
    cursor: pointer;
    ${IndoorCashPayment};
    @media screen and (max-width: 800px){
      width: 40px;
    height: 40px;
  }
  `;

  export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

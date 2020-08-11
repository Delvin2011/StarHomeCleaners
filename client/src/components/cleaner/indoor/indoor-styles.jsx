import styled from 'styled-components';
import { FaRegCreditCard } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import { css } from 'styled-components';

const r = css`
color: red;
`;

const y = css`
color: yellow;
`;

/***********Indoor Payment Options*************/
const IndoorCashPayment = props => {
  if (props.IndoorCashPayment) {
    return y;
  }
  else
  return r;
};

const IndoorCardPayment = props => {
  if (props.IndoorCardPayment) {
    return y;
  }
  else
  return r;
};


export const CreditCardPayment = styled(FaRegCreditCard)`
  color: red;
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
  color: red;
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

import styled from 'styled-components';



export const CartDetails = styled.div`
  display: grid;
  grid-template-columns: 95% 5%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-left: 5px;
    @media screen and (max-width: 800px){

    }
`;



export const DetailHeader = styled.h3`
    text-align: center;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    line-height: 1.6;
    color: #4a4a4a;
    font-weight : bold;
    @media screen and (max-width: 800px){
      font-size: 12px;
}
`;

export const BookingDetail = styled.h4`
    text-align: left;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: left;
    line-height: 1.6;
    color: #4a4a4a;
    @media screen and (max-width: 800px){
      font-size: 12px;
}
`;
import styled from 'styled-components';
import CustomButton from '../../custom-button/custom-button';

export const CollectionItemContainer = styled.div`

  width: 22vw;
  height:450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
 
  &:hover {
    .image {
      opacity: 0.8;
      border-style: outset;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 45vw;
    height:275px;
    border-style: groove;
    border-color: lightgrey;
    border-width: thin;
    &:hover {
      .image {
        opacity: unset;
        
      }
      button {
        opacity: unset;
      }
    }

  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    top: 100px;
    display: block;
    width: 50%;
    height: 40px;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    font-size: 70%;  
  }
`;

export const ViewButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 310px;
  display: none;
  @media screen and (max-width: 800px) {
    top: 150px;
    display: block;
    width: 60%;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    font-size: 70%;  
    width: 50%;
    height: 40px;
    
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  @media screen and (max-width: 800px) {
    height: 85%;
    width: 93%;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
  font-size: 90%; 
  margin-left: 5px;
  @media screen and (max-width: 800px) {
    width: 75%;
    font-size: 70%;   
  }
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
  padding: 0 15px;
  font-size: 90%; 
  @media screen and (max-width: 800px) {
    text-align: center;
    margin-right: 8px;
    width: 25%;
    font-size: 70%;
  }
`;




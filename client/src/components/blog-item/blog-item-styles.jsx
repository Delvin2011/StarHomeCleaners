import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CollectionItemContainer = styled.div`

  width: 23vw;
  height: 400px;
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
  width: 50%;
  opacity: 0.7;
  position: absolute;
  top: 35%;
  display: none;
  colour: black;
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
  height: 50%;
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
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const SummaryContainer = styled.p`
  width: 100%;
  margin-bottom: 5px;
  font-size: 90%; 
  margin-left: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 12px;   
  }
`;

export const BlogsContainer = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;  
  }
`;





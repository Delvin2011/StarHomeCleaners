import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  ViewButton,
  BackgroundImage,
  SummaryContainer,
  PriceContainer
} from './blog-item-styles';

const BlogItem = ({ item, addItem, history }) => {
  const { name, price, imageUrl } = item;
console.log(item);
  return (
    
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <SummaryContainer>{name}</SummaryContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
      <ViewButton onClick={() => { 
    history.push('/product',item);  
  }} inverted >
        View Product  
      </ViewButton>
    </CollectionItemContainer>
  );
};

/*      <HomeBackground products={imageUrl}/>*/

export default withRouter(BlogItem);
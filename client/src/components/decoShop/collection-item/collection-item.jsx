import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { addDecoItem } from '../../../redux/decoCart/decoCart-actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  ViewButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item-styles';

const CollectionItem = ({ item, addDecoItem, history }) => {
  const { name, price, imageUrl } = item;
  return (
    
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addDecoItem(item)} inverted>
        Add to cart
      </AddButton>
      <ViewButton onClick={() => { 
    history.push('/product',item);  console.log(item);
  }} inverted >
        View Product  
      </ViewButton>
    </CollectionItemContainer>
  );
};

/*      <HomeBackground products={imageUrl}/>*/

const mapDispatchToProps = dispatch => ({
  addDecoItem: item => dispatch(addDecoItem(item))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CollectionItem));
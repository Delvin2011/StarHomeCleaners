import React from 'react';

import { CustomButtonContainer } from './custom-button-styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;


/*import React from 'react';

import './custom-button.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => ( //conditionally render (using string interpolation) a classname based of a prop (if isGoogleSignIn or inverted(add to cart button) is true)
    <button className = {`${inverted ? 'inverted': '' }
        ${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} 
        {...otherProps}> 
    {children}

    </button>

);

export default CustomButton;
/*Create stateless functional component
- get the children that get passed off of our props that gets passd to CustomButton
- distructure the props of otherProps into the button (if we get a type submit, the button will get that)
- put children inside of the custom button.*/
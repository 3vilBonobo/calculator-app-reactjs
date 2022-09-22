import React from 'react';
import { StyledButton } from './Styled/Button.styled';

const Button = ({ value }) => {
  return <StyledButton className="btn">{value}</StyledButton>;
};

export default Button;

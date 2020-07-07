import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;
  width: 50px;
  border-radius: 50px;
`;

const RoundButton = ({ text }) => (
  <Button onClick={() => console.log('Clickeeeeen')}>
    {text}
  </Button>
);

export default RoundButton;

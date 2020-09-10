import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  grid-template-rows: repeat(4, min-content);
  grid-gap: var(--margin-m);
  max-width: var(--width-section-xs);
  height: fit-content;
  margin: auto;
  padding: var(--margin-xl) 10px;
`;

const Icon = styled.i`
  font-size: 3em;
  opacity: 0.5;
`;

const Title = styled.h2`
  text-align: center;
  opacity: 0.7;
`;

const P = styled.p`
  text-align: center;
`;

const NoData = ({ icon, title, text }) => (
  <Div>
    <Icon className={`${icon} f__r-both--cen`} />
    <Title>{title}</Title>
    <P>{text}</P>
  </Div>
);

export default NoData;

import React from 'react';
import styled from 'styled-components';

const Layout = styled.section`
  grid-column: 2;
  grid-row: 2;
  // border: 1px solid grey;
  // background-color: green;
`;

const Main = () => (
  <Layout>
    <h1>Main app area</h1>
  </Layout>
);

export default Main;

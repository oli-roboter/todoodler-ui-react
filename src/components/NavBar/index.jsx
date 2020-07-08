import React from 'react';
import styled from 'styled-components';

const Layout = styled.section`
  grid-column: 1 / span 2;  
  grid-row: 1;
  background-color: grey;
`;

const NavBar = () => (
  <Layout>
    <h1>Navbar</h1>
  </Layout>
);

export default NavBar;

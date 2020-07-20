import React from 'react';
import styled from 'styled-components';
import SideMenu from './components/side-menu';
import NavBar from '../../components/navbar';
import Main from './components/Main';

const Layout = styled.section`
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 1fr 6fr;
  width: 100vw;
  height: 90vh;
`;

const Todoodler = () => (
  <Layout>
    <NavBar />
    <SideMenu />
    <Main />
  </Layout>
);

export default Todoodler;

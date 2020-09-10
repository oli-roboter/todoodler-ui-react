import React from 'react';
import styled from 'styled-components';
import SideMenu from './components/side-menu/SideMenu';
import NavBar from '../../components/navbar/Navbar';
import Main from './components/main/Main';
import { TodoProvider } from './todo-context';

const Layout = styled.section`
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 1fr 5fr;
  width: 100vw;
  height: 90vh;
`;

const Todoodler = () => (
  <Layout>
    <NavBar />
    <TodoProvider>
      <SideMenu />
      <Main />
    </TodoProvider>
  </Layout>
);

export default Todoodler;

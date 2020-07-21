import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideMenu from './components/side-menu';
import NavBar from '../../components/navbar';
import Main from './components/Main';
import { getTodos } from '../../services/api/todo';
import { getWorkGroupUsers } from '../../services/api/users';

const Layout = styled.section`
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 1fr 6fr;
  width: 100vw;
  height: 90vh;
`;

const Todoodler = () => {
  // todo rebuild state to avoid double rendering in each setState
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersPromise = getWorkGroupUsers();
    const todosPromise = getTodos();

    Promise.all([usersPromise, todosPromise])
      .then(([resolvedUsers, resolvedTodos]) => {
        setTodos(resolvedTodos.data.data);
        setUsers(resolvedUsers.data.data.users);
      });
  }, []);

  const onFilter = (username, checked) => {
    let usersToDisplay;
    if (checked) {
      usersToDisplay = [...filteredUsers];
      usersToDisplay.push(username);
    } else {
      usersToDisplay = filteredUsers.filter((user) => user !== username);
    }
    setFilteredUsers(usersToDisplay);
  };

  return (
    <Layout>
      <NavBar />
      <SideMenu users={users} filteredUsers={filteredUsers} filter={onFilter} />
      <Main todos={todos} filteredUsers={filteredUsers} />
    </Layout>
  );
};

export default Todoodler;

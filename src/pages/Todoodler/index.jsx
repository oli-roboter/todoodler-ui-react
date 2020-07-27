import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideMenu from './components/side-menu';
import NavBar from '../../components/navbar';
import Main from './components/main';
import { getTodos, addTodo } from '../../services/api/todo';
import { getWorkGroupUsers } from '../../services/api/users';
import colours from '../../assets/colours';
import colorInjector from './utils/inject-colour';

const Layout = styled.section`
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 1fr 5fr;
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
        const injectColour = colorInjector(colours);
        const usersWithColour = injectColour.inUsers(resolvedUsers.data.data.users);
        const userWithColourInTodo = injectColour.inTodos(resolvedTodos.data.data, usersWithColour);
        setUsers(usersWithColour);
        setTodos(userWithColourInTodo);
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

  const newTodo = async ({ todo }) => {
    const updatedTodos = await addTodo(todo);
    if (updatedTodos.error) {
      //todo: change for notification, without ok, so modal does not close
      alert(updatedTodos.error.error, updatedTodos.statusCode);
      return;
    }
    // console.log('updatedTodos', updatedTodos);
    // const addedTodos = [[...todos, updatedTodos.data.data]];
    setTodos([...todos, updatedTodos.data.data]);
  };

  return (
    <Layout>
      <NavBar />
      <SideMenu
        todos={todos}
        users={users}
        filter={onFilter}
        addTodo={newTodo}
      />
      <Main todos={todos} filteredUsers={filteredUsers} />
    </Layout>
  );
};

export default Todoodler;

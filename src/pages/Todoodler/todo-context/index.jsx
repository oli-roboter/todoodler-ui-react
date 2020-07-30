/* eslint-disable no-undef */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { addTodo, getTodos } from '../../../services/api/todo';
import { getWorkGroupUsers } from '../../../services/api/users';
import colours from '../../../assets/colours';
import makeUserColours from '../utils/user-colours';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [userColours, setUserColours] = useState({});

  useEffect(() => {
    const usersPromise = getWorkGroupUsers();
    const todosPromise = getTodos();

    Promise.all([usersPromise, todosPromise])
      .then(([resolvedUsers, resolvedTodos]) => {
        //maybe build unique state will the 3 infos below and use reducer
        const userColourData = makeUserColours(colours, resolvedUsers.data.data.users);
        setUserColours(userColourData);
        setUsers(resolvedUsers.data.data.users);
        setTodos(resolvedTodos.data.data);
      })
      .catch((e) => console.error(e));
      //do proper error handling
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
      alert(updatedTodos.error.error, updatedTodos.statusCode);
      return;
    }
    const todoData = updatedTodos.data.data;
    const username = todoData.assignedTo;
    const colour = users.filter((user) => user.username === username);
    todoData.colour = colour[0].colour;
    setTodos([...todos, todoData]);
  };

  return (
    <TodoContext.Provider
      value={{
        filteredUsers,
        todos,
        users,
        userColours,
        onFilter,
        newTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoState = () => {
  const state = useContext(TodoContext);
  const {
    filteredUsers,
    todos,
    users,
    userColours,
    onFilter,
    newTodo,
  } = state;
  return {
    filteredUsers,
    todos,
    users,
    userColours,
    onFilter,
    newTodo,
  };
};

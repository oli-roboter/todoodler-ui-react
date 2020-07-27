import React from 'react';
import ModalWithFade from './Modal';
import TodoForm from './TodoForm';

const TodoModal = ({ open, onClose, addTodo }) => (
  <ModalWithFade
    component={TodoForm}
    open={open}
    onClose={onClose}
    addTodo={addTodo}
  />
);

export default TodoModal;

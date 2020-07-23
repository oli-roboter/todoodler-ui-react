import React from 'react';
import ModalWithFade from './Modal';
import TodoForm from './TodoForm';

const TodoModal = ({ open, onClose }) => (
  <ModalWithFade
    component={TodoForm}
    open={open}
    onClose={onClose}
  />
);

export default TodoModal;

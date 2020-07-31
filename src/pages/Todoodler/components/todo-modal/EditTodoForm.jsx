import React from 'react';

export default function EditTodoForm({ todo, onClose }) { 
  const onChange = (e) => console.log(e.target.name, e.target.value);

  return (
    <div>
      <h3>Edit Form</h3>
      <h6>{todo.todoId}</h6>
      <ul>
        <li>{todo.text}</li>
        <li>{todo.detail}</li>
        <li>{todo.assignedTo}</li>
        <li>{todo.importance}</li>
        <li>{todo.dueDate}</li>
      </ul>
      <button onClick={onClose}>Click to Close</button>
    </div>
  );
}

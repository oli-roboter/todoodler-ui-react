import React from 'react';

export default function EditTodoForm({ onClose }) {
  return (
    <div>
      <h1>Edit Form</h1>
      <button onClick={onClose}>Click to Close</button>
    </div>
  );
}

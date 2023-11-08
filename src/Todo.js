import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </li>
  );
};

export default Todo;

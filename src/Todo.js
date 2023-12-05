import React from 'react';

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const formatDate = (dateString) => {
    return dateString ? new Date(dateString).toLocaleDateString() : '期限なし';
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={handleTodoClick} />
        {todo.name}
      </label>
      { todo.deadline && <span> - 期限: {formatDate(todo.deadline)}</span>}
    </li>
  );
};

export default Todo;

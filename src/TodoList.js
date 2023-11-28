import React, { useState, useEffect } from 'react'
import Todo from "./Todo";


const TodoList = ({todos, toggleTodo, sortOrder}) => {
  const [sortedTodos, setSortedTodos] = useState([]); 

  useEffect(() => {
    const sorted = [...todos].sort((a,b) => {
      return sortOrder === "asc" ? 
      a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    });

    setSortedTodos(sorted);

  }, [todos, sortOrder]); // todosまたはsortOrderが変更された場合にのみ実行


  return (
  <ul>
    {sortedTodos.map(todo => (
      <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </ul>
  );
};
export default TodoList;
import React, { useState, useEffect } from 'react'
import Todo from "./Todo";


const TodoList = ({todos, toggleTodo, sortOrder}) => {
  const [sortedTodos, setSortedTodos] = useState([]); 

  useEffect(() => {
    const sorted = [...todos].sort((a,b) => {
      // 名前でソート
      const nameCompare = sortOrder === "asc" ?
      a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);

      //期限が設定されている場合のみ期限で比較
      if (a.deadline && b.deadline) {
        const deadlineA = new Date(a.deadline);
        const deadlineB = new Date(b.deadline);
        // 期限が同じ場合は名前でソート
        return deadlineA - deadlineB || nameCompare; 
      }

      return nameCompare;
    });

    setSortedTodos(sorted);

  // todosまたはsortOrderが変更された場合にのみ実行
  }, [todos, sortOrder]); 


  return (
  <ul>
    {sortedTodos.map(todo => (
      <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </ul>
  );
};
export default TodoList;
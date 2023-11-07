import React from 'react'


const TodoList = ({todos, toggleTodo}) => {
  return (

  <ul>

    {todos.map(todo => (
      <li key={todo.id}>{todo.name}</li>
    ))}

  </ul>

  )

}

export default TodoList;
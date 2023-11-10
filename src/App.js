import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; // idを割り当てる
import TodoList  from "./TodoList";


function App() {
//タスク追加用の変数を作成
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef(null);

  const handleAddTodo = () => {
    const name = todoNameRef.current.value; // inputの値を保持
    

    if (name === "" ) return;
    setTodos((prevTodos) => {
      return [...prevTodos,{id: uuidv4(), name, completed: false}]
    })
    todoNameRef.current.value = '';
  };

  const toggleTodo = id => {
    setTodos(todos => todos.map(todo =>
      todo.id === id? {...todo, completed: !todo.completed}:todo
      ))
  }

  const handleDeleteCompleted = () => {
    setTodos(todos => todos.filter(todo => !todo.completed))
  }


  return (
    <div>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleDeleteCompleted} >
        完了タスクを削除
      </button>
    </div>
  );
}

export default App;

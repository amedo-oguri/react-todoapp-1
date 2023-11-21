import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; // idを割り当てる
import TodoList  from "./TodoList";
import SelectAllCheckbox from './SelectAllCheckbox';



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

      // Enterでタスク追加
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const toggleTodo = id => {
    setTodos(todos => todos.map(todo =>
      todo.id === id? {...todo, completed: !todo.completed}:todo
      ))
  }

  const handleDeleteCompleted = () => {
    setTodos(todos => todos.filter(todo => !todo.completed))
  }

  const handleSelectAll = () => {
    // todos配列の中の投稿内容の完了状態が同じか確認
    const isAllChecked = todos.every((todo) => todo.completed);
    setTodos(todos.map((todo) => ({...
      todo, completed: !isAllChecked
    })));
  };

  return (
    <div>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" onKeyDown={handleKeyDown}/>
      <button onClick={handleAddTodo}>追加</button>
      <SelectAllCheckbox todos={todos} handleSelectAll={handleSelectAll} />
      <button onClick={handleDeleteCompleted} >
        完了タスクを削除
      </button>
    </div>
  );
}

export default App;

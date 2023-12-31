import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList  from "./TodoList";
import SelectAllCheckbox from './SelectAllCheckbox';



function App() {
//タスク追加用の変数を作成
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [taskDeadline, setTaskDeadline] = useState(null); // 初期値：空欄

  const handleAddTodo = (e) => {
    if(e) e.preventDefault(); // イベントがある場合だけフォームのデフォルト送信を防止する
    const name = todoNameRef.current.value;
    if (name === "" ) {
      alert("タスク名を入力して下さい");
      return;
    }

    setTodos((prevTodos) => {
      return [...prevTodos,
        {id: uuidv4(),
           name,
           completed: false, 
           deadline: taskDeadline ? new Date(taskDeadline) : null
      }]
    })
    todoNameRef.current.value = ' ';
    setTaskDeadline(null); // 日付入力フィールドをクリア
  };

  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo(e);
      todoNameRef.current.focus();
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
    const isAllChecked = todos.every((todo) => todo.completed);
    setTodos(todos.map((todo) => ({...todo,
      completed: !isAllChecked
    })));
  };

  const toggleSortOrder = () => {
    setSortOrder(order => order === "asc" ? "desc" : "asc")
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} sortOrder={sortOrder} />
      <input ref={todoNameRef} type="text" onKeyDown={handleKeyDown}/>
      <input type="date" value={taskDeadline || ''} onChange={(e) => setTaskDeadline(e.target.value)} onKeyDown={handleKeyDown}/>
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={toggleSortOrder}>
        {sortOrder === "asc" ? "降順" : "昇順"}
      </button>
      <SelectAllCheckbox todos={todos} handleSelectAll={handleSelectAll} />
      <button onClick={handleDeleteCompleted} >
        完了タスクを削除
      </button>
    </div>
  );
}

export default App;

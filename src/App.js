import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; // idを割り当てる
import TodoList  from "./TodoList";


function App() {
//タスク追加用の変数を作成
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef(null);

  const handleAddTodo = () => {
    const name = todoNameRef.current.value; // inputの値を保持
    const id = uuidv4();

    if (name === "" ) return;
    setTodos((prevTodos) => {

      return [...prevTodos,
        {
          id,
          name
        }
      ]
    })
    todoNameRef.current.value = '';
  };

  return (
    <div>
      <TodoList todos={todos} />


      {/* inputの値を取得 */}
      <input ref={todoNameRef} />
      <button onClick={handleAddTodo}>追加</button>

    </div>
  );
}

export default App;

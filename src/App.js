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
      return [...prevTodos,{id, name}]
    })
    todoNameRef.current.value = '';
  };

  const toggleTodo = id => {
    // アロー関数を使ってsetTodosを呼び出す
    setTodos(todos => todos.map(todo =>
      // todos配列内の要素に対しmapメソッドで全ての要素に同じ処理を施す
      todo.id === id? {...todo, completed: !todo.completed}
      // 引数のidと一致するidが存在する場合
      // todoをスプレッド構文によりコピーしてtodoのcompletedを反転させる
      :todo
      // 一致しない場合は元のオブジェクトを返す
      ))
  }


  return (
    <div>

      <TodoList todos={todos} toggleTodo={toggleTodo} />


      {/* inputの値を取得 */}
      <input ref={todoNameRef} />
      <button onClick={handleAddTodo}>追加</button>

    </div>
  );
}

export default App;

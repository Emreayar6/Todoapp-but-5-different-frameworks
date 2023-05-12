import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // State
  const [todos, setTodos] = useState([]);

  // Binding
  const todoText = useRef();

  // Side Effects
  useEffect(() => {
    const Todos = localStorage.getItem("todos");
    setTodos(Todos ? JSON.parse(Todos) : []);
  }, []);

  // Function
  function pushTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem("todos", JSON.stringify(next));
    todoText.current.value = "";
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={pushTodo}>
        <input type="text" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default App;

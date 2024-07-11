import React, { useEffect, useState } from "react";
import Header from "./Header";
import Todos from "./Todos";

const Home = () => {
  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo(null);
  };
  const toggleCheckTodo = (srNo, checked) => {
    setTodos([
      ...todos.filter((todo) => todo.srNo != srNo),
      { ...todos.find((todo) => todo.srNo === srNo), checked },
    ]);
  };
  return (
    <>
      <Header />
      <div style={{ margin: "1rem auto" }}>
        <input
          onChange={(e) =>
            setTodo({
              srNo: todos.length + 1,
              name: e.target.value,
              checked: false,
            })
          }
          type="text"
          name="todo"
          id="todo"
          value={todo ? todo.name : ""}
        />
        <button onClick={addTodo}>add</button>
      </div>
      <Todos
        toggleCheckTodo={toggleCheckTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
};

export default Home;

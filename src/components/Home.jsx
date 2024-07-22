import React, { useEffect, useState } from "react";
import Header from "./Header";
import Todos from "./Todos";

const Home = () => {
  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useState(() => {
    let localItems = localStorage.getItem("ITEMS");
    return localItems ? JSON.parse(localItems) : [];
  });

  useEffect(
    () => localStorage.setItem("ITEMS", JSON.stringify(todos)),
    [todos]
  );

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo(null);
  };

  const toggleCheckTodo = (srNo, checked) => {
    setTodos(
      [
        ...todos.filter((todo) => todo.srNo != srNo),
        { ...todos.find((todo) => todo.srNo === srNo), checked },
      ].sort((a, b) => a.srNo - b.srNo)
    );
  };

  return (
    <>
      <Header />
      <form onSubmit={addTodo}>
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
          <button type="submit">add</button>
        </div>
      </form>
      <Todos
        toggleCheckTodo={toggleCheckTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
};

export default Home;

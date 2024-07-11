import React from "react";
import Todo from "./Todo";

const Todos = ({ toggleCheckTodo, todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <Todo
          key={i}
          todo={todo}
          toggleCheckTodo={toggleCheckTodo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default Todos;

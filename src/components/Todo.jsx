import React from "react";

const Todo = ({ toggleCheckTodo, todo, todos, setTodos }) => {
  const { name, checked, srNo } = todo;
  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.srNo != srNo));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0.5rem auto",
      }}
    >
      <span style={{ textDecoration: checked ? "line-through" : "" }}>
        {name}
      </span>
      <div
        style={{
          display: "flex",
        }}
      >
        <button onClick={() => toggleCheckTodo(srNo, !checked)}>done</button>
        <button onClick={deleteTodo}>delete</button>
      </div>
    </div>
  );
};

export default Todo;

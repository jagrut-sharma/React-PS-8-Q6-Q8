import { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoContext } from "..";
import TaskCard from "../components/TaskCard";

export default function OpenTodo() {
  const { todoList } = useContext(TodoContext);

  const openTodo = todoList.filter(({ isCompleted }) => !isCompleted);

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Open Todos</h1>
      <h3>Open todos: {openTodo.length}</h3>
      {openTodo.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
}

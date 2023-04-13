import { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoContext } from "..";
import TaskCard from "../components/TaskCard";

export default function DoneTodo() {
  const { todoList } = useContext(TodoContext);

  const doneTodo = todoList.filter(({ isCompleted }) => isCompleted);

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Done Todos</h1>
      <h3>Done Todos: {doneTodo.length}</h3>
      {doneTodo.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
}

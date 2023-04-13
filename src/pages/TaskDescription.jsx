import { useParams, Link } from "react-router-dom";
import { useContext } from "react";

import { TodoContext } from "..";

export default function TaskDescription() {
  const { todoList } = useContext(TodoContext);
  const { taskID } = useParams();

  const findTask = function (todoList, taskID) {
    return todoList.find(({ id }) => id === +taskID);
  };

  const { title, description, isCompleted } = findTask(todoList, taskID);

  return (
    <div>
      <h1>Todo Description</h1>
      <h2>Title: {title}</h2>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>
        <strong>Status: </strong>
        {isCompleted ? "Done" : "Not done"}
      </p>
      <Link to="/">See all tasks</Link>
    </div>
  );
}

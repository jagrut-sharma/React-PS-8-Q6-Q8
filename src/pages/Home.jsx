import { useEffect, useState, useContext } from "react";
import { fakeFetch } from "../API/fakeFetch";

import { TodoContext } from "..";

export default function Home() {
  const { todoList, setTodoList, updateTodoHandler } = useContext(TodoContext);

  const fetchData = async () => {
    const res = await fakeFetch("https://example.com/api/todos");
    const {
      data: { todos }
    } = res;
    setTodoList(todos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getCompletionStyle = (isCompleted) => {
    return isCompleted ? "strikethrough" : "";
  };

  return (
    <>
      {todoList.length ? (
        todoList.map((task) => {
          const { id, title, description, isCompleted } = task;
          return (
            <div key={id} className="task" style={{ textAlign: "left" }}>
              <h2 className={getCompletionStyle(isCompleted)}>{title}</h2>
              <p className={getCompletionStyle(isCompleted)}>{description}</p>
              <p className={getCompletionStyle(isCompleted)}>
                Status: {isCompleted ? "Done" : "Not Done"}
              </p>
              <button
                disabled={isCompleted}
                onClick={() => updateTodoHandler(task)}
              >
                Mark as done
              </button>
            </div>
          );
        })
      ) : (
        <h2> Loading....</h2>
      )}
    </>
  );
}

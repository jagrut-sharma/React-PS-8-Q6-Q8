import { createContext, useState } from "react";

export const TodoContext = createContext({
  todoList: [],
  setTodoList: (id) => {},
  updateTodoHandler: (id) => {}
});

export const TodoProvider = function ({ children }) {
  const [todoList, setTodoList] = useState([]);

  const updateTodoHandler = function (taskItem) {
    const updatedTask = { ...taskItem, isCompleted: true };
    setTodoList(
      todoList.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }
        return task;
      })
    );
  };

  const todoContext = {
    todoList,
    setTodoList,
    updateTodoHandler
  };

  return (
    <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>
  );
};

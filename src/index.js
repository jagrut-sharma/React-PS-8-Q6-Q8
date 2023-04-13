import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { TodoContext, TodoProvider } from "./context/TodoContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { TodoContext };

root.render(
  <StrictMode>
    <Router>
      <TodoProvider>
        <App />
      </TodoProvider>
    </Router>
  </StrictMode>
);

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import DoneTodo from "./pages/DoneTodo";
import OpenTodo from "./pages/OpenTodo";
import "./styles.css";
import TaskDescription from "./pages/TaskDescription";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/done" element={<DoneTodo />} />
        <Route path="/open" element={<OpenTodo />} />
        <Route path="/detail/:taskID" element={<TaskDescription />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

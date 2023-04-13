import { NavLink } from "react-router-dom";

export default function Header() {
  const getStyle = function ({ isActive }) {
    return isActive ? "active-link" : "link";
  };

  return (
    <div>
      <h1>Todos</h1>
      <NavLink className={getStyle} to="/">
        Home
      </NavLink>{" "}
      ||{" "}
      <NavLink className={getStyle} to="/done">
        Done Todo
      </NavLink>{" "}
      ||{" "}
      <NavLink className={getStyle} to="/open">
        Open Todo
      </NavLink>
    </div>
  );
}

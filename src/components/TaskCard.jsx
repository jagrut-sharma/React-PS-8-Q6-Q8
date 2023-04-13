import { Link } from "react-router-dom";

export default function TaskCard({ id, title, isCompleted }) {
  return (
    <div className="task">
      <h2>{title}</h2>
      <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        Expand Todo
      </Link>
    </div>
  );
}

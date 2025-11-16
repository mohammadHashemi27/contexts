import { useContext } from "react";

import { TaskContext } from "../context/taskContext";
import AuthContext from "../context/AuthContext";

export const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const { user } = useContext(AuthContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <p>User:{user}</p>
    </nav>
  );
};

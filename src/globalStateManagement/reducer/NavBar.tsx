import { useContext } from "react";

import AuthContext from "../Auth/AuthContext";
import useTasks from "../Tasks/useTasks";

export const NavBar = () => {
  const { tasks } = useTasks();
  const { user } = useContext(AuthContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <div className="d-flex gap-2">
        <span className="badge text-bg-warning">{tasks.length}</span>
        <span className="badge text-bg-warning">User: {user}</span>
      </div>
    </nav>
  );
};

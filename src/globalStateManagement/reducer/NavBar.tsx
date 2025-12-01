import useAuthStore from "../Auth/AuthZus";

import useCounterStore from "../counter/CounterZustand";
import useTaskStore from "../Tasks/TaskZus";

export const NavBar = () => {
  const { counter } = useCounterStore();
  const { tasks } = useTaskStore();
  const { user } = useAuthStore();
  return (
    <nav className="navbar d-flex justify-content-between">
      <div className="d-flex gap-2">
        <span className="badge text-bg-primary">counter:{counter}</span>
        <span className="badge text-bg-primary">task: {tasks.length}</span>
        <span className="badge text-bg-primary">User: {user}</span>
      </div>
    </nav>
  );
};

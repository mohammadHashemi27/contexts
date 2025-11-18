import { useReducer, type ReactNode } from "react";
import { TaskLists } from "./TaskReducer";
import { TaskContext } from "./taskContext";
interface props {
  children: ReactNode;
}
export const TaskProvider = ({ children }: props) => {
  const [tasks, dispatch] = useReducer(TaskLists, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

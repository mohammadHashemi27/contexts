import type { Dispatch } from "react";
import { type ActionTask, type Task } from "../reducer/Task";
import React from "react";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<ActionTask>;
}

const TaskContext = React.createContext<TaskContextType>({
  tasks: [],
  dispatch: () => {},
});
export default TaskContext;

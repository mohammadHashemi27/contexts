import type { Dispatch } from "react";
import type { ActionTasks, Task } from "./TaskReducer";
import React from "react";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<ActionTasks>;
}

export const TaskContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);

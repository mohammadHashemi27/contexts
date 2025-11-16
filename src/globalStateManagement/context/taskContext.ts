import type { Dispatch } from "react";
import type { ActionTask, Task } from "../reducer/Task";
import React from "react";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<ActionTask>;
}

export const TaskContext = React.createContext<TaskContextType>({
  tasks: [],
  dispatch: () => {},
});

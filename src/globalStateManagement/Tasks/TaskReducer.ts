export interface Task {
  title: string;
  id: number;
}

interface AddTask {
  type: "ADD";
  task: Task;
}
interface DeleteTask {
  type: "DELETE";
  taskId: number;
}
interface ResetTasks {
  type: "RESET";
}

export type ActionTasks = AddTask | DeleteTask | ResetTasks;

export const TaskLists = (tasks: Task[], action: ActionTasks): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
    case "RESET":
      return [];
  }
};

import { create } from "zustand";

interface Task {
  id: number;
  title: string;
}

interface TaskStore {
  tasks: Task[];
  ADD: (task: Task) => void;
  DELETE: (taskId: number) => void;
  RESET: () => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  ADD: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  DELETE: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== taskId),
    })),

  RESET: () => set(() => ({ tasks: [] })),
}));

export default useTaskStore;

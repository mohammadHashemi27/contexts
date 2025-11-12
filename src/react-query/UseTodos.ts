// 📁 src/react-query/UseTodos.ts
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// مثال fetchTodos یا useTodos hook شما می‌تواند اینجا باشد:
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  return data;
};

export const useTodos = () => {
  return useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

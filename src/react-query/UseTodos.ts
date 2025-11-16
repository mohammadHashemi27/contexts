import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
}

interface Pages {
  page: number;
  pageSize: number;
}

export const fetchTodos = async ({
  page,
  pageSize,
}: Pages): Promise<Todo[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos",
    {
      params: {
        _start: (page - 1) * pageSize,
        _limit: pageSize,
      },
    }
  );
  return data;
};

export const useTodos = (page: number, pageSize: number) => {
  return useQuery<Todo[]>({
    queryKey: ["todos", page, pageSize],
    queryFn: () => fetchTodos({ page, pageSize }),
  });
};

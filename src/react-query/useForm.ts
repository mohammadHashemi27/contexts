import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Todo } from "./UseTodos";
import axios from "axios";

const useForm = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post("https://fakestoreapi.com/products", todo)
        .then((res) => res.data),

    onSuccess: (data) => {
      queryClient.setQueryData<Todo[]>(["todo"], (oldTodos) => [
        data,
        ...(oldTodos || []),
      ]);
    },
  });
};
export default useForm;

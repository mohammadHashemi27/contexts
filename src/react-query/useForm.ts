// 📁 src/react-query/useForm.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Todo } from "./UseTodos";

const useForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTodo: Todo) =>
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export default useForm;

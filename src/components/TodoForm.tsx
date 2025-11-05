import { Button, HStack, Input } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import type { Todo } from "../react-query/UseTodos";
import axios from "axios";

export const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    onSuccess: (data) => {
      queryClient.setQueryData<Todo[]>(["todo"], (oldTodos) => [
        data,
        ...(oldTodos || []),
      ]);
    },

    onError: (data) => {
      console.log(data);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const title = ref.current?.value.trim();
    if (!title) return;

    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };

    addTodo.mutate(newTodo);
    ref.current!.value = "";
  };

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form onSubmit={handleSubmit}>
        <HStack gap={3}>
          <Input ref={ref} placeholder="Add Todo" flex="1" />
          <Button type="submit" variant={"surface"} borderRadius={6} colorPalette="blue">
            Add
          </Button>
        </HStack>
      </form>
    </>
  );
};

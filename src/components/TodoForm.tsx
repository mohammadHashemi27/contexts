import type { Todo } from "../react-query/UseTodos";
import { Input, Button, HStack } from "@chakra-ui/react";
import { useRef } from "react";
import useForm from "../react-query/useForm";

export const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  // hook
  const addTodo = useForm();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const title = ref.current?.value.trim();
    if (!title) return;

    const newTodo: Todo = {
      id: Date.now(),
      title,
    
    };

    addTodo.mutate(newTodo);
    ref.current!.value = "";
  };

  return (
    <>
      {addTodo.isError && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form onSubmit={handleSubmit}>
        <HStack gap={3} justifyContent={"center"}>
          <Input ref={ref} placeholder="Add Todo" width={400} />
          <Button
            type="submit"
            colorPalette="blue"
            loading={addTodo.isPending}
            borderRadius={5}
            disabled={addTodo.isPending}
          >
            Add
          </Button>
        </HStack>
      </form>
    </>
  );
};

import { Button, HStack } from "@chakra-ui/react";
import { useContext } from "react";

import { GrPowerReset } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { TaskContext } from "./context/taskContext";

export const AddTaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  return (
    <>
      <HStack gap={4} padding={5}>
        <Button
          borderRadius={5}
          colorPalette={"gray"}
          variant="subtle"
          onClick={() =>
            dispatch({
              type: "ADD",
              task: {
                id: Date.now(),
                title: "TASK:" + Date.now(),
              },
            })
          }
        >
          <IoMdAdd /> اضافه کردن
        </Button>

        <Button
          borderRadius={5}
          colorPalette={"gray"}
          variant="subtle"
          onClick={() =>
            dispatch({
              type: "RESET",
            })
          }
        >
          <GrPowerReset /> پاک کردن
        </Button>
      </HStack>
      <ul className="list-group list-group-numbered">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-start mt-3 br-3 color-red"
          >
            <span className="flex-grow-1">{task.title}</span>
            <Button
              ml={"2"}
              size={{ base: "xs", sm: "sm" }}
              px={2}
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              حذف
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

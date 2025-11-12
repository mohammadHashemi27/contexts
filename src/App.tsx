import { useReducer } from "react";
import "./App.css";
import { TaskLists } from "./globalStateManagement/reducer/Task";
import { AddTaskList } from "./globalStateManagement/addTask";
import { NavBar } from "./globalStateManagement/reducer/NavBar";
import TaskContext from "./globalStateManagement/context/taskContext";
import { Login } from "./globalStateManagement/reducer/login";
import { Box } from "@chakra-ui/react";

function App() {
  const [tasks, dispatch] = useReducer(TaskLists, []);
  return (
    <>
      <Box fontSize={{ base: "10px", md: "18px", lg: "20px" }}>
        <Login />
        <TaskContext.Provider value={{ tasks, dispatch }}>
          <NavBar />
          <AddTaskList />
        </TaskContext.Provider>
      </Box>
    </>
  );
}

export default App;

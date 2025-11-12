import { useReducer } from "react";
import { Box, Container, VStack } from "@chakra-ui/react";
import "./App.css";
import TaskContext from "./globalStateManagement/context/taskContext";
import { NavBar } from "./globalStateManagement/reducer/NavBar";
import { AddTaskList } from "./globalStateManagement/addTask";
import { TaskLists } from "./globalStateManagement/reducer/Task";
import { Login } from "./globalStateManagement/reducer/login";

function App() {
  const [tasks, dispatch] = useReducer(TaskLists, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <Box
        bg="gray.50"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={{ base: 2, sm: 4 }}
      >
        <Container
          maxW={{ base: "95%", sm: "90%", md: "600px", lg: "700px" }}
          bg="white"
          p={{ base: 4, sm: 6 }}
          borderRadius="xl"
          boxShadow="md"
        >
          <Login />
          <VStack gap={6}>
            <NavBar />
            <AddTaskList />
          </VStack>
        </Container>
      </Box>
    </TaskContext.Provider>
  );
}

export default App;

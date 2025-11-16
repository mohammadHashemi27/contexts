import "./App.css";

import { NavBar } from "./globalStateManagement/reducer/NavBar";
import { AddTaskList } from "./globalStateManagement/addTask";

import { Login } from "./globalStateManagement/reducer/login";
import { AuthProvider } from "./globalStateManagement/authProvider";
import { TaskProvider } from "./globalStateManagement/TaskProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <Login />
          <NavBar />
          <AddTaskList />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;

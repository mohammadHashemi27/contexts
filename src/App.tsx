import "./App.css";

import { NavBar } from "./globalStateManagement/reducer/NavBar";
import { AddTaskList } from "./globalStateManagement/Tasks/addTask";
import { Login } from "./globalStateManagement/Auth/AuthLogin";
import { TaskProvider } from "./globalStateManagement/Tasks/TaskProvider";
import { AuthProvider } from "./globalStateManagement/Auth/authProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Login />
        <NavBar />
        <AddTaskList />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;

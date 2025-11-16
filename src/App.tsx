import { useReducer } from "react";
import "./App.css";
import { TaskContext } from "./globalStateManagement/context/taskContext";
import { TaskLists } from "./globalStateManagement/reducer/Task";
import { NavBar } from "./globalStateManagement/reducer/NavBar";
import { AddTaskList } from "./globalStateManagement/addTask";
import { ActionsLogins } from "./globalStateManagement/reducer/Logins";
import AuthContext from "./globalStateManagement/context/AuthContext";
import { Login } from "./globalStateManagement/reducer/login";

function App() {
  const [tasks, TaskDispatch] = useReducer(TaskLists, []);
  const [user, AuthDispatch] = useReducer(ActionsLogins, "");
  return (
    <>
      <AuthContext.Provider value={{ user, dispatch: AuthDispatch }}>
        <TaskContext.Provider value={{ tasks, dispatch: TaskDispatch }}>
          <Login/>
          <NavBar />
          <AddTaskList />
        </TaskContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;

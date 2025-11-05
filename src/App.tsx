import "./App.css";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";

function App() {
  return (
    <>
      <TodoForm />
      <Todo />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { User } from "./Routing/user";

function App() {
  return (
    <>
      <User />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
      </Routes>
    </>
  );
}

export default App;

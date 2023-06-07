import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TodoList from "./TodoList";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/todo" element={<TodoList />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

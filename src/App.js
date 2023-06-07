import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Todo from "./Todo";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

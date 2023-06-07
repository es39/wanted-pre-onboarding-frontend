import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import customAxios from "./customAxios";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  const accessToken = localStorage.getItem("access_token");

  const getTodos = () => {
    customAxios
      .get(`/todos`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate(`/signin`);
    }
  }, [accessToken]);

  return (
    <Container>
      <TodoCreate setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  );
};

export default Todo;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

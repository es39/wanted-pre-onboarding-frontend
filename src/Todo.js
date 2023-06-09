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

  // * 목록 조회 요청
  const getTodos = async () => {
    await customAxios
      .get(`/todos`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTodos();
  }, [accessToken]);

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
  flex-direction: column;
`;

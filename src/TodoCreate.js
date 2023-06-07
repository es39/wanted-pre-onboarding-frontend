import React, { useState } from "react";
import styled from "styled-components";
import customAxios from "./customAxios";

const TodoCreate = ({ todos, setTodos }) => {
  const [createTodo, setCreateTodo] = useState("");

  const accessToken = localStorage.getItem("access_token");

  const handleChangeTodo = (e) => {
    setCreateTodo(e.target.value);
  };

  const handleCreateTodos = async () => {
    await customAxios
      .post(
        `/todos`,
        {
          hedaers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        { todo: createTodo }
      )
      .then(() => setCreateTodo(""))
      .catch((err) => console.log(err));
    await customAxios
      .get(`/todos`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <input
        data-testid="new-todo-input"
        placeholder="할 일을 입력해주세요."
        onChange={handleChangeTodo}
      ></input>
      <button data-testid="new-todo-add-button" onClick={handleCreateTodos}>
        할 일 추가
      </button>
    </Container>
  );
};

export default TodoCreate;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

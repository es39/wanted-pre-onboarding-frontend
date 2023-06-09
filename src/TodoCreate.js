import React, { useState } from "react";
import styled from "styled-components";
import customAxios from "./customAxios";

const TodoCreate = ({ setTodos }) => {
  const [createTodo, setCreateTodo] = useState("");

  const accessToken = localStorage.getItem("access_token");

  const handleChangeTodo = (e) => {
    setCreateTodo(e.target.value);
  };

  // * 목록 추가 요청
  const handleCreateTodo = async () => {
    await customAxios
      .post(
        `/todos`,
        { todo: createTodo },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => setCreateTodo(""))
      .catch((err) => console.log(err));
    await customAxios
      .get(`/todos`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <input
        data-testid="new-todo-input"
        placeholder="할 일을 입력해주세요."
        onChange={handleChangeTodo}
        value={createTodo}
      />
      <button data-testid="new-todo-add-button" onClick={handleCreateTodo}>
        추가
      </button>
    </Container>
  );
};

export default TodoCreate;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

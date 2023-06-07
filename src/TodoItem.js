import React from "react";
import styled from "styled-components";
import customAxios from "./customAxios";

const TodoItem = ({ todo, setTodos }) => {
  const accessToken = localStorage.getItem("access_token");

  const handleUpdateTodo = async (id) => {
    await customAxios.put(`/todos/${id}`);
  };

  const handleDeleteTodo = async (id) => {
    await customAxios
      .delete(`/todos/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .catch((err) => console.log(err));
    customAxios
      .get(`/todos`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <input type="checkbox"></input>
      <div className="todo-name">{todo.todo}</div>
      <ButtonWrapper>
        <button
          data-testid="modify-button"
          onClick={() => handleUpdateTodo(todo.id)}
        >
          수정
        </button>
        <button
          data-testid="delete-button"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          삭제
        </button>
      </ButtonWrapper>
    </Container>
  );
};

export default TodoItem;

const Container = styled.main`
  display: flex;
  .todo-name {
    width: 100%;
  }
`;
const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

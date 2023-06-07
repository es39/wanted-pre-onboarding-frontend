import React, { useState } from "react";
import styled from "styled-components";
import customAxios from "./customAxios";

const TodoItem = ({ todo, setTodos }) => {
  const [editSelect, setEditSelect] = useState(false);
  const [editContent, setEditContent] = useState(todo.todo);

  const accessToken = localStorage.getItem("access_token");

  const handleEditContent = (e) => {
    setEditContent(e.target.value);
  };

  const handleClickEdit = () => {
    setEditSelect(!editSelect);
  };

  // * 목록 수정 요청
  const handleUpdateTodo = async (id) => {
    await customAxios
      .put(
        `/todos/${id}`,
        { todo: editContent, isCompleted: true },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then(() => {
        setEditContent(editContent);
        setEditSelect(!editSelect);
      })
      .catch((err) => console.log(err));
    await customAxios
      .get(`/todos`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  // * 목록 삭제 요청
  const handleDeleteTodo = async (id) => {
    await customAxios
      .delete(`/todos/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
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
      <input type="checkbox"></input>
      {editSelect === false ? (
        <div className="todo-name">{todo.todo}</div>
      ) : (
        <input
          className="todo-input"
          onChange={handleEditContent}
          value={editContent}
        ></input>
      )}
      {editSelect === false ? (
        <ButtonWrapper>
          <button data-testid="modify-button" onClick={handleClickEdit}>
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            삭제
          </button>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <button onClick={() => handleUpdateTodo(todo.id)} value={editContent}>
            제출
          </button>
          <button onClick={handleClickEdit}>취소</button>
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default TodoItem;

const Container = styled.main`
  display: flex;
  width: 100%;
  .todo-name {
    width: 100%;
  }
  .todo-input {
    width: 100%;
  }
`;
const ButtonWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

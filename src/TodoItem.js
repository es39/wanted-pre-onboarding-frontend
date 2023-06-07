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
      <label>
        <input type="checkbox" />
        {editSelect === false ? (
          <span className="todo-name">{todo.todo}</span>
        ) : (
          <input
            className="todo-input"
            onChange={handleEditContent}
            value={editContent}
            data-testid="modify-input"
          />
        )}
      </label>
      {editSelect === false ? (
        <>
          <button data-testid="modify-button" onClick={handleClickEdit}>
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            삭제
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => handleUpdateTodo(todo.id)}
            value={editContent}
            data-testid="submit-button"
          >
            제출
          </button>
          <button onClick={handleClickEdit} data-testid="cancel-button">
            취소
          </button>
        </>
      )}
    </Container>
  );
};

export default TodoItem;

const Container = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em;
  .todo-name {
    width: 100%;
    padding: 0.5em;
  }
`;

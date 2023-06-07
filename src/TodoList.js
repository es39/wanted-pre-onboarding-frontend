import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <Container>
      <ul>
        {todos ? (
          todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
            </li>
          ))
        ) : (
          <div>목록이 없습니다.</div>
        )}
      </ul>
    </Container>
  );
};

export default TodoList;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > ul {
    width: 100%;
  }
`;

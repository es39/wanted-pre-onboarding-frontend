import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <Container>
      <ul>
        {todos.length !== 0 ? (
          todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
            </li>
          ))
        ) : (
          <div className="todo-empty">목록이 없습니다.</div>
        )}
      </ul>
    </Container>
  );
};

export default TodoList;

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  > ul {
    width: 100%;
  }
  .todo-empty {
    width: 100vw;
    height: 100%;
    text-align: center;
  }
`;

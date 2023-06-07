import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();

  const handleNavigateSignUp = () => {
    navigate(`/signup`);
  };

  const handleNavigateSignIn = () => {
    navigate(`/signin`);
  };

  return (
    <Container>
      <button onClick={handleNavigateSignUp}>회원가입하러 가기</button>
      <button onClick={handleNavigateSignIn}>로그인하러 가기</button>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

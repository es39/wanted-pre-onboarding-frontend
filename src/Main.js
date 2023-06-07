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
      <ButtonWrapper>
        <ButtonStyle onClick={handleNavigateSignUp}>회원가입</ButtonStyle>
        <ButtonStyle onClick={handleNavigateSignIn}>로그인</ButtonStyle>
      </ButtonWrapper>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  align-items: center;
  flex-direction: column;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.5em;
`;
const ButtonStyle = styled.button`
  background-color: #feb35c;
  color: white;
  border: none;
  transition: all 0.2s ease 0s;
  width: 80px;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 0.85rem;
  &:hover {
    color: black;
    background-color: white;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  }
`;

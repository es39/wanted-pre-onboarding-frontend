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
      <SingUpBox>
        <ButtonWrapper>
          <Button onClick={handleNavigateSignUp}>회원가입 하기</Button>
          <Button onClick={handleNavigateSignIn}>로그인 하기</Button>
        </ButtonWrapper>
      </SingUpBox>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  align-items: center;
  flex-direction: column;
`;
const SingUpBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 80%;
  height: 100%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;
  width: 100%;
  height: 100%;
`;
const Button = styled.button`
  background-color: #feb35c;
  color: white;
  border: none;
  transition: all 0.2s ease 0s;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  font-size: 1.5rem;
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding: 1em;
  font-weight: bold;
  &:hover {
    color: black;
    background-color: white;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  }
`;

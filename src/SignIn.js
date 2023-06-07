import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import customAxios from "./customAxios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const accessToken = localStorage.getItem("access_token");

  const handleCurrentEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    await customAxios
      .post(`/auth/signin`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (accessToken) {
      navigate(`/todo`);
    }
  }, [accessToken]);

  return (
    <Container>
      <SignInBox>
        <form onSubmit={handleSubmitSignIn}>
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            data-testid="email-input"
            onChange={handleCurrentEmail}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            data-testid="password-input"
            onChange={handleCurrentPassword}
          />
          <button data-testid="signin-button">로그인</button>
        </form>
      </SignInBox>
    </Container>
  );
};

export default SignIn;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignInBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

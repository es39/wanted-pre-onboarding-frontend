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
        alert("로그인 성공");
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => {
        console.log(err);
        alert("로그인에 실패했습니다. 다시 시도해주세요");
      });
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
          <ContentBox>
            <div className="group">
              <input
                type="text"
                placeholder="이메일을 입력해주세요"
                data-testid="email-input"
                onChange={handleCurrentEmail}
              />
            </div>
            <div className="group">
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                data-testid="password-input"
                onChange={handleCurrentPassword}
              />
            </div>
            <button data-testid="signin-button" className="signin-btn">
              로그인
            </button>
          </ContentBox>
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
  width: 100vw;
  > form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    padding: 5em;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    background-color: white;
  }
  .signin-btn {
    width: 100%;
    color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
    background-color: #feb35c;
    transition: all 0.2s ease 0s;
    border: none;
    padding: 10px;
    margin-top: 10px;
    &:hover {
      color: black;
      background-color: white;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    }
    &:active {
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
      position: relative;
      top: 2px;
    }
  }
`;
const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  .group {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 1em;
    padding-top: 1em;
    width: 100%;
    input {
      width: 100%;
      padding: 10px;
    }
    .message {
      font-weight: 500;
      font-size: 0.8rem;
      line-height: 24px;
      position: absolute;
      bottom: -20px;
      left: 0;
      text-align: center;
      &.success {
        color: #3478dd;
      }
      &.error {
        color: #ff2727;
      }
    }
  }
`;

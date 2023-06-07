import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import customAxios from "./customAxios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const navigate = useNavigate();

  const accessToken = localStorage.getItem("access_token");

  const handleCheckSignUp = (e) => {
    const currentEmail = e.target.value;
    const emailRegex =
      /^[a-zA-Z0-9ㄱ-힣.\-_]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i;
    setEmail(currentEmail);
    if (!emailRegex.test(currentEmail)) {
      setEmailMessage("@를 포함하여 이메일 형식으로 작성해주세요");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  };

  const handleCheckPassword = (e) => {
    const currentPassword = e.target.value;
    const pwRegex = /^[a-zA-Z0-9ㄱ-힣]{8,}$/i;
    setPassword(currentPassword);
    if (!pwRegex.test(currentPassword)) {
      setPasswordMessage("8자리 이상 입력해주세요");
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 비밀번호 형식입니다.");
      setIsPassword(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await customAxios
      .post(`/auth/signup`, {
        email,
        password,
      })
      .then(() => {
        alert("회원가입 성공");
        navigate(`/signin`);
      })
      .catch((err) => {
        console.log(err);
        alert("회원가입에 실패했습니다. 다시 확인해주세요");
      });
  };

  useEffect(() => {
    if (accessToken) {
      navigate(`/todo`);
    } else if (accessToken === null) {
      navigate(`/signup`);
    }
  }, [accessToken]);

  return (
    <Container>
      <SignUpBox>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            data-testid="email-input"
            onChange={handleCheckSignUp}
          />
          {email.length > 0 && <span>{emailMessage}</span>}
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            data-testid="password-input"
            onChange={handleCheckPassword}
          />
          {password.length > 0 && <span>{passwordMessage}</span>}
          <button
            data-testid="signup-button"
            disabled={!(isEmail && isPassword)}
          >
            회원가입
          </button>
        </form>
      </SignUpBox>
    </Container>
  );
};

export default SignUp;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const SignUpBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  > form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

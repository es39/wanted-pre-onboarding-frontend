import React, { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const handleCheckSignUp = (e) => {
    const currentEmail = e.target.value;
    const emailRegex = /^[a-zA-Z0-9.\-_]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i;
    setEmail(currentEmail);
  };

  const handleCheckPassword = (e) => {
    const currentPassword = e.target.value;
    const pwRegex = /^[a-zA-Z0-9ㄱ-힣]{8,}$/i;
    setPassword(currentPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios 추가
  };

  return (
    <Container>
      <SignUpBox>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="이메일을 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
          <button>회원가입</button>
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

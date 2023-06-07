import React, { useState } from "react";
import styled from "styled-components";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCurrentEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // axios 추가
  };

  return (
    <Container>
      <SignInBox>
        <form>
          <input type="text" placeholder="이메일을 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
          <button>로그인</button>
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

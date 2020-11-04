import React from "react";
import styled from "styled-components";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SignInAndSignUpStyles = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpStyles>
      <SignIn />
      <SignUp />
    </SignInAndSignUpStyles>
  );
};

export default SignInAndSignUpPage;

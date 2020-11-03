import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import FormInput from "./FormInput";

const SignInStyles = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }
`;

const SignIn = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginForm({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  return (
    <SignInStyles>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          name="email"
          type="email"
          value={loginForm.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={loginForm.password}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit" value="Submit Form" onSubmit={handleSubmit}>
          Sign In
        </CustomButton>
      </form>
    </SignInStyles>
  );
};

export default SignIn;

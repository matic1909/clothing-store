import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import FormInput from "./FormInput";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";

const SignInStyles = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

const SignIn = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginForm;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setLoginForm({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  return (
    <SignInStyles>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </SignInStyles>
  );
};

export default SignIn;

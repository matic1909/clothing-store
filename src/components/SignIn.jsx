import React, { useState } from 'react';

const SignIn = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginForm({ email: '', password: '' });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  return (
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            value={loginForm.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            type="password"
            value={loginForm.password}
            onChange={handleChange}
            required
          />
        </label>
        <input type="submit" value="Submit Form" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default SignIn;

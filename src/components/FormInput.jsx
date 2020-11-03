import React from "react";
import styled from "styled-components";

const FormInputStyles = styled.div`
  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: var(--sub-color);
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--sub-color);
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      top: -14px;
      font-size: 12px;
      color: var(--main-color);
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: var(--sub-color);
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      top: -14px;
      font-size: 12px;
      color: var(--main-color);
    }
  }
`;

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormInputStyles>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </FormInputStyles>
);

export default FormInput;

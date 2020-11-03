import React from "react";
import styled from "styled-components";

const CustomButtonStyles = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &.google-sign-in {
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      color: white;
      border: none;
    }
  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <CustomButtonStyles
    className={isGoogleSignIn ? "google-sign-in" : ""}
    {...otherProps}
  >
    {children}
  </CustomButtonStyles>
);

export default CustomButton;

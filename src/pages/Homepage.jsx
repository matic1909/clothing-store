import React from "react";
import styled from "styled-components";
import Directory from "../components/Directory";

const HomePageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage = () => (
  <HomePageStyles>
    <Directory />
  </HomePageStyles>
);

export default HomePage;

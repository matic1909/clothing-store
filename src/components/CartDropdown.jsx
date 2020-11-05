import React from "react";
import styled from "styled-components";

import CustomButton from "./CustomButton";

const CartDropdownStyles = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  button {
    margin-top: auto;
  }
`;

const CartDropdown = () => (
  <CartDropdownStyles>
    <div className="cart-items">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </CartDropdownStyles>
);

export default CartDropdown;

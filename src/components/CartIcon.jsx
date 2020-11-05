import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleHidden } from "../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartStyles = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;

const CartIcon = ({ toggleHidden }) => (
  <CartStyles onClick={toggleHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </CartStyles>
);

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: (cart) => dispatch(toggleHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

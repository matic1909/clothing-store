import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/crown.svg";

import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

const HeaderStyles = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
`;

const Header = ({ currentUser, hidden }) => (
  <HeaderStyles>
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? <CartDropdown /> : null}
  </HeaderStyles>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);

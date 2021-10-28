import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { withRouter } from "react-router-dom";

const logo = require("../../assets/logo.png");

import "./header.styles.scss";

function Header(props: { history: any }) {
  const dispatch = useDispatch();
  const hidden = useSelector((state: any) => state.cart.hidden);

  return (
    <div className="header__container">
      <div className="header__left-side">
        <div className="header__icon-menu">
          <GiHamburgerMenu className="header__icon" size={25} />
          <span>Menu</span>
        </div>
      </div>

      <div className="header__middle-side">
        <img
          onClick={() => props.history.push("/")}
          className="header__logo"
          src={logo}
          alt=""
        />
      </div>
      <div className="header__right-side">
        <AiOutlineUser
          onClick={() => props.history.push("/signin")}
          className="header__icon"
          size={23}
        />

        <AiOutlineHeart
          onClick={() => props.history.push("/favourites")}
          className="header__icon"
          size={23}
        />
        <BiShoppingBag
          onClick={() => dispatch(toggleCartHidden())}
          className="header__icon"
          size={23}
        />
        {hidden ? " " : <CartDropdown />}
      </div>
    </div>
  );
}

export default withRouter(Header);

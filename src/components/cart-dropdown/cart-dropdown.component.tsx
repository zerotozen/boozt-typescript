import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

function CartDropdown(props: { history: any }) {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__cart-items">
        {cartItems?.length ? (
          cartItems?.map((cartItem: { id: number }) => (
            <div key={cartItem.id}>
              <CartItem collectionItem={cartItem} />
            </div>
          ))
        ) : (
          <span className="cart-dropdown__empty-message">
            Yor cart is empty
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          props.history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default withRouter(CartDropdown);

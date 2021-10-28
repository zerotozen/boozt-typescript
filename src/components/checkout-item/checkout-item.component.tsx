import React from "react";

import {
  addItemtoCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.action";

import { useDispatch } from "react-redux";

import "./checkout-item.styles.scss";

function CheckoutItem(props: { cartItem: any }) {
  const dispatch = useDispatch();
  const { product_name, filename, actual_price, quantity } = props.cartItem;
  return (
    <div className="checkout-item">
      <div className="checkout-item__image">
        <img src={filename} alt="item" />
      </div>
      <span className="checkout-item__name">{product_name}</span>
      <span className="checkout-item__quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeItemFromCart(props.cartItem))}
        >
          &#10094;
        </div>
        <span className="checkout-item__value">{quantity}</span>
        <div
          className="checkout-item__arrow"
          onClick={() => dispatch(addItemtoCart(props.cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="checkout-item__price">{actual_price}</span>
      <div
        className="checkout-item__remove-button"
        onClick={() => dispatch(clearItemFromCart(props.cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;

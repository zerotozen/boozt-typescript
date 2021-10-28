import React from "react";

import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./checkout-page.styles.scss";

function CheckoutPage() {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-page__header">
        <div className="checkout-page__header-block">
          <span>Products</span>
        </div>
        <div className="checkout-page__header-block">
          <span>Description</span>
        </div>
        <div className="checkout-page__header-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-page__header-block">
          <span>Price (€)</span>
        </div>
        <div className="checkout-page__header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems?.map((cartItem: { id: React.Key }) => (
        <div key={cartItem.id}>
          <CheckoutItem cartItem={cartItem} />
        </div>
      ))}
      <div className="checkout-page__total">
        <span>TOTAL: $</span>
      </div>
      <div className="checkout-page__buttom">
        <CustomButton>Process Payment</CustomButton>
      </div>
    </div>
  );
}

export default CheckoutPage;

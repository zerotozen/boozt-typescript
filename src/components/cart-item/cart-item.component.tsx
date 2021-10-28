import React from "react";
import { useDispatch } from "react-redux";

import {
  addItemtoCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.action";

import {
  MdClear,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import "./cart-item.styles.scss";

function CartItem(
  id: any,
  collectionItem: {
    filename: string;
    actual_price: string;
    product_name: string;
    quantity: number;
  }
) {
  const dispatch = useDispatch();

  const { filename, actual_price, product_name, quantity } = collectionItem;

  const actualPrice = parseFloat(actual_price).toFixed(2);
  const Total = Number(actualPrice) * quantity;
  return (
    <div className="cart-item__container">
      <div className="cart-item__-image-container">
        <img className="cart-item__image" src={filename} alt="item" />
      </div>

      <div className="cart-item__details-container">
        <span>
          {product_name.length > 10
            ? product_name.toLowerCase()
            : `${product_name.toLowerCase().slice(0, 20)}...`}
        </span>
        <span className="cart-item__price-container">
          <MdOutlineKeyboardArrowLeft
            onClick={() => dispatch(removeItemFromCart(collectionItem))}
            size={23}
          />
          {quantity}
          <MdOutlineKeyboardArrowRight
            onClick={() => dispatch(addItemtoCart(collectionItem))}
            size={23}
          />
          {Total.toFixed(2)}€
        </span>
      </div>
      <div className="cart-item__icon-container">
        <MdClear
          onClick={() => dispatch(clearItemFromCart(collectionItem))}
          size={20}
        />
      </div>
    </div>
  );
}

export default CartItem;

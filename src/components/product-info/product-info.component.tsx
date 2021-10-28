import React from "react";

import { useDispatch } from "react-redux";

import { addItemToFavouriteList } from "../../redux/favourites/favourites.actions.js";

import { addItemtoCart } from "../../redux/cart/cart.action";

import CustomButtom from "../custom-button/custom-button.component";

import Select from "react-select";

import { sizeOptions } from "../../data/select-sizes.options.js";

import { withRouter } from "react-router-dom";

import "./product-info.styles.scss";

function ProductInfo(history: any, props: { cartItem: any }) {
  const { product_name, brand_name, actual_price, filename, id } =
    props.cartItem;

  const dispatch = useDispatch();
  return (
    <div className="product-info__container">
      <div className="product-info__left-side">
        <div className="product__image-container">
          <img className="product-info__image" src={filename} />
        </div>
      </div>
      <div className="product-info__right-side">
        <h1>{product_name.toUpperCase()}</h1>
        <div className="product-info__header-container">
          <span className="product-info__brand-name">{brand_name}</span>
        </div>
        <Select
          className="product-info__select"
          options={sizeOptions}
          placeholder={"Select Size"}
        />
        <div className="product-info__actual-price">{actual_price}€</div>
        <div className="product-info__buttons-container">
          <div className="product-info__button">
            <CustomButtom onClick={() => history.push("/checkout")}>
              Buy now
            </CustomButtom>
          </div>
          <div className="product-info__button">
            <CustomButtom
              onClick={() => dispatch(addItemtoCart(props.cartItem))}
            >
              Add to Cart
            </CustomButtom>
          </div>
          <div className="product-info__button">
            <CustomButtom
              onClick={() => dispatch(addItemToFavouriteList(props.cartItem))}
            >
              Add to Favourites
            </CustomButtom>
          </div>
        </div>
        <div className="product-info__body-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, et
            officia porro repellat inventore dolor. Molestias architecto
            voluptates quos eligendi, consectetur iste eveniet fugit eius et
            minus molestiae quibusdam cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, et
            officia porro repellat inventore dolor. Molestias architecto
            voluptates quos eligendi, consectetur iste eveniet fugit eius et
            minus molestiae quibusdam cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, et
            officia porro repellat inventore dolor. Molestias architecto
            voluptates quos eligendi, consectetur iste eveniet fugit eius et
            minus molestiae quibusdam cumque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductInfo);

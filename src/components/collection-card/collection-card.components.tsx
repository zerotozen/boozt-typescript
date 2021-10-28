import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addItemToFavouriteList,
  removeFromFavouritesList,
} from "../../redux/favourites/favourites.actions.js";

import { addItemtoCart } from "../../redux/cart/cart.action";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import "./collection-card.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

import { Link } from "react-router-dom";

function CollectionCard(props: { item: any }) {
  const dispatch = useDispatch();
  const favouritesList = useSelector(
    (state: any) => state.favourites.favouritesList
  );

  const { product_name, brand_name, actual_price, filename, id } = props.item;
  const actualPrice = parseFloat(actual_price).toFixed(2);

  const addItem = (item: any) => {
    dispatch(addItemToFavouriteList(item));
    dispatch(removeFromFavouritesList(item));
  };

  return (
    <div className="collection-card__container">
      <div onClick={() => addItem(props.item)}>
        <AiOutlineHeart className="collection-card__icon" size={20} />
        {favouritesList?.map((favouriteItem: any, idx: any) => {
          return favouriteItem.id === props.item.id ? (
            <AiFillHeart
              className="collection-card__icon"
              size={20}
              key={idx}
            />
          ) : null;
        })}
      </div>
      <div className="collection-card__title-contaier">
        <h3 className="collection-card__title">
          {product_name?.toUpperCase()}
        </h3>
      </div>
      <span>{brand_name}</span>
      <Link to={`/product/${id}`}>
        <img className="collection-card__image" src={filename} alt="" />
      </Link>
      <span className="collection-card__price">{actualPrice} €</span>
      <CustomButton onClick={() => dispatch(addItemtoCart(props.item))}>
        Add to cart
      </CustomButton>
    </div>
  );
}

export default CollectionCard;

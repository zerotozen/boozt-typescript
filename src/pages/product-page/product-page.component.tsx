import React from "react";

import { useSelector } from "react-redux";

import ProductInfo from "../../components/product-info/product-info.component";

function ProductPage(props: { match: any }) {
  const collection = useSelector(
    (state: any) => state.collection.collectionData
  );
  return collection.map((item: any, idx: any) => {
    if (item.id === props.match.params.collectionId) {
      return (
        <div className="product-page__container" key={idx}>
          <ProductInfo cartItem={item} />
        </div>
      );
    }
  });
}

export default ProductPage;

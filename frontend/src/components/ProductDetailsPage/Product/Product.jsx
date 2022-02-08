import React from "react";
import Title from "../../../common/Title/Title";
import Nav from "./Nav/Nav";
import Details from "./Details/Details";

const Product = ({product, addToFavoriteHandler, addToCartHandler, qty, setQty, history, isFavorite}) => {
  return (
    <>
      <Title title={product.name} />
      <Nav
        _id={product._id}
        name={product.name}
        countInStock={product.countInStock}
        rating={product.rating}
        numReviews={product.numReviews}
      />
      <Details
        product={product}
        history={history}
        addToCartHandler={addToCartHandler}
        addToFavoriteHandler={addToFavoriteHandler}
        qty={qty}
        setQty={setQty}
        isFavorite={isFavorite}/>
    </>
  );
};

export default Product;

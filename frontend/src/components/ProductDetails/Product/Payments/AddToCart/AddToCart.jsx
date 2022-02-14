import React from "react";
import styles from "./AddToCart.module.scss";

const AddToCart = ({addToCartHandler, countInStock}) => {
  return (
    <button
      onClick={addToCartHandler}
      disabled={!(!!countInStock)}
      className={!!countInStock ? null : styles.isDisabled}>
      Добавить в Корзину
    </button>
  );
};

export default AddToCart;

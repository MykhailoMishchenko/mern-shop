import React from "react";
import styles from "./CartProducts.module.scss";
import Product from "./Product/Product";

const CartProducts = ({products, addToCart, removeFromCart}) => {
  return (
    <div className={styles.goods}>
      {
        products.map(product => <Product product={product} removeFromCart={removeFromCart} addToCart={addToCart}/>)
      }
    </div>
  );
};

export default CartProducts;

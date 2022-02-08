import React from "react";
import styles from "./Product.module.scss";
import Image from "./Image/Image";
import AboutProduct from "./AboutProduct/AboutProduct";
import Title from "./Title/Title";
import Underline from "./Underline/Underline";

const Product = ({product, addToCart, removeFromCart}) => {
  return (
    <div key={product._id}>
      <div className={styles.item}>
        <Image product={product}/>
        <div className={styles.description}>
          <Title product={product}/>
          <div className={styles.details}>
            <AboutProduct product={product} addToCart={addToCart} removeFromCart={removeFromCart}/>
          </div>
        </div>
      </div>
      <Underline/>
    </div>
  );
};

export default Product;

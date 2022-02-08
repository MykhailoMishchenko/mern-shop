import React from "react";
import styles from "../FavoriteProducts.module.scss";
import Image from "./Image/Image";
import Title from "./Title/Title";
import AboutProduct from "./AboutProduct/AboutProduct";
import Underline from "./Underline/Underline";

const Product = ({product, removeFromFavorite}) => {
  return (
    <div key={product._id}>
      <div className={styles.item}>
        <Image product={product}/>
        <div className={styles.description}>
          <Title product={product}/>
          <div className={styles.details}>
            <AboutProduct product={product} removeFromFavorite={removeFromFavorite}/>
          </div>
        </div>
      </div>
      <Underline/>
    </div>
  );
};

export default Product;

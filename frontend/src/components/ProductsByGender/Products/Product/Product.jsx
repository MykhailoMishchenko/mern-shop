import React from "react";
import styles from "./Product.module.scss";
import Rating from "../../../../common/Rating/Rating";
import Image from "./Image/Image";
import Sale from "./Sale/Sale";
import Title from "./Title/Title";
import Price from "./Price/Price";
import Characteristic from "./Characteristic/Characteristic";

const Product = ({isGrid, product}) => {

  return (
    <div
      key={product._id}
      className={isGrid ? styles.item : styles.product}
    >
      <Sale
        percent={product.percent}
        sale={product.sale}
      />
      <Image
        _id={product._id}
        image={product.image}
        name={product.name}
        isGrid={isGrid}
      />
      <div className={styles.info}>
        <Title
          _id={product._id}
          name={product.name}
          isGrid={isGrid}
        />
        <Price
          price={product.price}
          percent={product.percent}
          sale={product.sale}
          isGrid={isGrid}
        />
        <Rating value={product.rating} />
        <Characteristic
          product={product}
          isGrid={isGrid}
        />
      </div>
    </div>
  );
};

export default Product;

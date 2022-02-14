import React from "react";
import styles from "./Product.module.scss";
import Sale from "./Sale/Sale";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Price from "./Price/Price";
import Rating from "../Rating/Rating";

const Product = ({product}) => {

  return (
    <div className={styles.item}>
      {product.sale && <Sale percent={product.percent}/>}
      <Image
        _id={product._id}
        image={product.image}
        name={product.name}
      />
      <div className={styles.info}>
        <Title
          _id={product._id}
          name={product.name}
        />
        <Price
          price={product.price}
          percent={product.percent}
          sale={product.sale}
        />
        <Rating value={product.rating}/>
      </div>
    </div>
  );
};

export default Product;

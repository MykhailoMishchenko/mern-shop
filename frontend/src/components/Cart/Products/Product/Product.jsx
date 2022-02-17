import React from "react";
import styles from "./Product.module.scss";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Details from "./Details/Details";
import Underline from "./Underline/Underline";

const Product = ({product: {product, image, name, percent, sale, brand, category, price, gender, qty, countInStock,}, dispatch, history}) => {
  return (
    <div key={product}>
      <div className={styles.item}>
        <Image
          image={image}
          sale={sale}
          percent={percent}
          name={name}
          product={product}
        />
        <div className={styles.description}>
          <Title
            product={product}
            name={name}
          />
          <Details
            product={product}
            percent={percent}
            sale={sale}
            dispatch={dispatch}
            gender={gender}
            brand={brand}
            qty={qty}
            price={price}
            countInStock={countInStock}
            category={category}
            history={history}
          />
        </div>
      </div>
      <Underline/>
    </div>
  );
};

export default Product;

import React from "react";
import styles from "./Product.module.scss";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Details from "./Details/Details";
import Underline from "./Underline/Underline";

const Product = ({product: {_id, image, name, percent, sale, brand, category, price, gender, qty, countInStock,}, dispatch}) => {
  return (
    <div key={_id}>
      <div className={styles.item}>
        <Image
          image={image}
          sale={sale}
          percent={percent}
          name={name}
          _id={_id}
        />
        <div className={styles.description}>
          <Title
            _id={_id}
            name={name}
          />
          <Details
            _id={_id}
            percent={percent}
            sale={sale}
            dispatch={dispatch}
            gender={gender}
            brand={brand}
            qty={qty}
            price={price}
            countInStock={countInStock}
            category={category}
          />
        </div>
      </div>
      <Underline/>
    </div>
  );
};

export default Product;

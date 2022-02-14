import React from "react";
import styles from "./Product.module.scss";
import Image from "./Image/Image";
import Description from "./Description/Description";
import Underline from "./Underline/Underline";

const Product = ({product: {_id, name, image, sale, percent, price, category, brand, gender, countInStock}, dispatch}) => {
  return (
    <div key={_id}>
      <div className={styles.item}>
        <Image
          _id={_id}
          name={name}
          image={image}
          sale={sale}
          percent={percent}
        />
        <Description
          _id={_id}
          name={name}
          brand={brand}
          category={category}
          gender={gender}
          sale={sale}
          price={price}
          countInStock={countInStock}
          percent={percent}
          dispatch={dispatch}
        />
      </div>
      <Underline/>
    </div>
  );
};

export default Product;

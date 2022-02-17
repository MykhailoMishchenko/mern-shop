import React from "react";
import styles from "./Product.module.scss";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Details from "./Details/Details";

const Product = ({product: {_id, image, name, sale, percent, category, brand, gender, qty, price}}) => {
  return (
    <div key={_id}>
      <div className={styles.item}>
        <Image
          name={name}
          image={image}
          percent={percent}
          sale={sale}
        />
        <div className={styles.descriptionItem}>
          <Title
            name={name}
          />
          <Details
            category={category}
            brand={brand}
            price={price}
            qty={qty}
            gender={gender}
            percent={percent}
            sale={sale}
          />
        </div>
      </div>
      <div className={styles.underline}></div>
    </div>
  );
};

export default Product;

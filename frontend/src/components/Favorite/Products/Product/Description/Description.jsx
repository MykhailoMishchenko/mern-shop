import React from "react";
import styles from "../Product.module.scss";
import Title from "./Title/Title";
import Details from "./Details/Details";

const Description = ({_id, name, category, brand, gender, countInStock, sale, price, percent, dispatch}) => {
  return (
    <div className={styles.description}>
      <Title
        _id={_id}
        name={name}
      />
      <Details
        _id={_id}
        category={category}
        brand={brand}
        gender={gender}
        countInStock={countInStock}
        price={price}
        sale={sale}
        percent={percent}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Description;

import React from "react";
import styles from "./Products.module.scss";
import Product from "./Product/Product";

const Products = ({products, dispatch}) => {
  return (
    <div className={styles.goods}>
      {
        products.map(product => <Product key={product._id} product={product} dispatch={dispatch}/>)
      }
    </div>
  );
};

export default Products;

import React from "react";
import styles from "./Products.module.scss";
import Product from "./Product/Product";

const Products = ({products, dispatch, history}) => {
  return (
    <div className={styles.goods}>
      {
        products.map(product => <Product key={product.product} product={product} dispatch={dispatch} history={history}/>)
      }
    </div>
  );
};

export default Products;

import React from "react";
import styles from "../Products.module.scss";
import Empty from "../../../../common/Empty/Empty";
import {ReactComponent as EmptyImage} from "../../../../assets/image/storyset/emptyProducts.svg";
import Product from "../Product/Product";

const Products = ({isGrid, products, }) => {
  return (
    <div className={isGrid ? styles.listProduct : styles.listProductInLine}>
      {
        products.length === 0
          ? <Empty Component={EmptyImage} text="По таким критериям, товар не найден"/>
          : products.map(product => <Product key={product._id} isGrid={isGrid} product={product}/>)}
    </div>
  );
};

export default Products;

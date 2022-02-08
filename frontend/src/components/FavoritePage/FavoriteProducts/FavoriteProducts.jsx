import React from "react";
import styles from "./FavoriteProducts.module.scss";
import {NavLink} from "react-router-dom";
import {getLastPrice} from "../../../utils/getLastPrice";
import {calcSalePrice} from "../../../utils/calcSalePrice";
import {ReactComponent as Trash} from "../../../assets/image/icon/trash.svg";
import Product from "./Product/Product";

const FavoriteProducts = ({products, removeFromFavorite}) => {
  return (
    <div className={styles.goods}>
      {
        products.map(product => <Product product={product} removeFromFavorite={removeFromFavorite}/>)
      }
    </div>
  );
};

export default FavoriteProducts;

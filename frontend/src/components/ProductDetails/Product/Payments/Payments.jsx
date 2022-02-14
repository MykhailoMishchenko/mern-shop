import React from "react";
import Price from "./Price/Price";
import AddToCart from "./AddToCart/AddToCart";
import Qty from "./Qty/Qty";
import styles from "./Payments.module.scss";

const Payments = ({sale, price, percent, countInStock, qty, setQty, addToCartHandler}) => {
  return (
    <div className={styles.buyProduct}>
      <Price price={price} sale={sale} percent={percent}/>
      <AddToCart countInStock={countInStock} addToCartHandler={addToCartHandler}/>
      <Qty countInStock={countInStock} qty={qty} setQty={setQty}/>
    </div>
  );
};

export default Payments;

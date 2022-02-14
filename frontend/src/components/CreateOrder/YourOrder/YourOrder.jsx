import React from "react";
import Product from "./Product/Product";

const YourOrder = ({cartItems}) => {
  return (
    <>
      <h4>Ваш заказ</h4>
      {
        cartItems.map(product => <Product key={product.product} product={product} />)
      }
    </>
  );
};

export default YourOrder;

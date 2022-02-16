import React from "react";
import Sale from "./Sale/Sale";
import Image from "./Image/Image";

const Product = ({product}) => {
  return (
      <div>
        {product.sale && <Sale percent={product.percent} />}
        <Image _id={product._id} image={product.image} name={product.name} />
      </div>
  );
};

export default Product;

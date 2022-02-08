import React from "react";
import styles from "./AboutProduct.module.scss";
import {getLastPrice} from "../../../../../utils/getLastPrice";
import {calcSalePrice} from "../../../../../utils/calcSalePrice";
import {ReactComponent as Trash} from "../../../../../assets/image/icon/trash.svg";

const AboutProduct = ({product, addToCart, removeFromCart}) => {
  return (
    <div className={styles.characteristics}>
      <div className={styles.characteristic}>
        <p>Категория</p><p>
        {product.category === "sunglasses" ? "Солнцезащитные очки" : "Аксессуары"}
      </p>
      </div>
      <div className={styles.characteristic}>
        <p>Бренд</p><p>{product.brand}</p>
      </div>
      <div className={styles.characteristic}>
        <p>Пол</p>
        <p>{product.gender === "male" ? "Мужские" : "Женские"}</p>
      </div>
      <div className={styles.characteristic}>
        <p>Кол-во</p>
        <p>
          <select
            value={product.qty}
            onChange={e => addToCart(product._id, e.target.value)}
          >
            {
              [...Array(product.countInStock).keys()].map(x => (
                <option
                  key={x + 1}
                  value={x + 1}
                >{x + 1}</option>
              ))
            }
          </select>
        </p>
      </div>
      <div className={styles.characteristic}>
        <div className={styles.PriceAndTrash}>
          {
            product.sale ? <strong
                className={styles.withBefore}
                data-price={getLastPrice(product.price)}>
                ₴ {Math.floor(calcSalePrice(product.price, product.percent))}</strong>
              : <strong>₴ {product.price}</strong>
          }
          <Trash onClick={() => removeFromCart(product._id)} />
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;

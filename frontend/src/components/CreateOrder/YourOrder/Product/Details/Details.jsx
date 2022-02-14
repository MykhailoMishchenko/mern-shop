import React from "react";
import styles from "./Details.module.scss";
import {calcSalePrice} from "../../../../../utils/calcPrice";

const Details = ({category, brand, gender, qty, sale, price, percent}) => {
  return (
    <div className={styles.detailsItem}>
      <div className={styles.characteristicsItem}>
        <div className={styles.characteristicItem}>
          <p>Категория</p>
          <p>
            {
              category === "sunglasses"
                ? "Солнцезащитные очки"
                : "Аксессуары"
            }
          </p>
        </div>
        <div className={styles.characteristicItem}>
          <p>Бренд</p>
          <p>{brand}</p>
        </div>
        <div className={styles.characteristicItem}>
          <p>Пол</p>
          <p>
            {
              gender === "male"
                ? "Мужские"
                : "Женские"
            }
          </p>
        </div>
        <div className={styles.characteristicItem}>
          <p>Количество</p>
          <p>
            {
              qty
            }
          </p>
        </div>
        <div className={styles.characteristicItem}>
          <p>Цена</p>
          <p>
            {
              sale ?
                <>₴ {Math.floor(calcSalePrice(price, percent))}</>
                : <>₴ {price}</>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;

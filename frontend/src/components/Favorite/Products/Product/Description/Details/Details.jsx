import React from "react";
import styles from "./Details.module.scss";
import {ReactComponent as Trash} from "../../../../../../assets/image/icon/trash.svg";
import {removeFromFavoriteRequest} from "../../../../../../redux/Favorite/actions";
import {calcSalePrice, getLastPrice} from "../../../../../../utils/calcPrice";

const Details = ({category, brand, gender, countInStock, sale, percent, price, _id, dispatch}) => {
  return (
    <div className={styles.details}>
      <div className={styles.characteristics}>
        <div className={styles.characteristic}>
          <p>Категория</p>
          <p>
            {
              category === "sunglasses"
                ? "Солнцезащитные очки"
                : "Аксессуары"
            }
          </p>
        </div>
        <div className={styles.characteristic}>
          <p>Бренд</p>
          <p>{brand}</p>
        </div>
        <div className={styles.characteristic}>
          <p>Пол</p>
          <p>
            {
              gender === "male"
                ? "Мужские"
                : "Женские"
            }
          </p>
        </div>
        <div className={styles.characteristic}>
          <p>Наличие на складе</p>
          <p>
            {
              countInStock === 0
                ? "Нет в наличии"
                : "Есть в наличии"
            }
          </p>
        </div>
        <div className={styles.characteristic}>
          <div className={styles.PriceAndTrash}>
            {
              sale ? <strong
                  className={styles.withBefore}
                  data-price={getLastPrice(price)}>
                  ₴ {Math.floor(calcSalePrice(price, percent))}</strong>
                : <strong>₴ {price}</strong>
            }
            <Trash onClick={() => dispatch(removeFromFavoriteRequest(_id))} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import React from "react";
import styles from "./Products.module.scss";
import {ReactComponent as Empty} from "../../../assets/image/storyset/emptyProducts.svg";
import {NavLink} from "react-router-dom";
import {getLastPrice} from "../../../utils/getLastPrice";
import {calcSalePrice} from "../../../utils/calcSalePrice";
import Rating from "../../../common/Rating/Rating";

const Product = ({products, isGrid}) => {
  return (
    <>
      {
        products.length === 0
          ? <div className={styles.emptyWrapper}>
            <Empty className={styles.empty}/>
            <p>По таким критериям, товар не найден</p>
          </div>
          : products.map(product => (
            <div key={product._id} className={isGrid ? styles.item : styles.product}>
              {
                product.sale
                  ? <div className={styles.discount}>-{product.percent}% </div>
                  : null
              }
              <NavLink to={`/product/${product._id}`}>
                <img
                  style={isGrid ? {width: "245px", height: "163px"} : null}
                  src={product.image}
                  alt={product.name} />
              </NavLink>
              <div className={styles.info}>
                <NavLink
                  to={`/product/${product._id}`}
                  className={styles.title}>
                  <p className={styles.nameOfProduct}>{product.name}</p>
                </NavLink>
                {
                  product.sale
                    ? <p
                      data-price={getLastPrice(product.price)}
                      className={styles.newPrice}>
                      ₴ {Math.floor(calcSalePrice(product.price, product.percent))}</p>
                    : <p className={styles.priceOfProduct}>₴ {Math.floor(product.price)}</p>
                }
                <Rating value={product.rating} />
                {
                  !isGrid && <div className={styles.characteristic}>
                    <div className={styles.descriptions}>
                      <div><p>Пол</p> <p>{product.gender === "male" ? "Мужские" : "Женские"}</p></div>
                      <div><p>Бренд</p> <p>{product.brand}</p></div>
                      <div><p>Форма Оправы</p> <p>{product.frameForGlasses}</p></div>
                      <div><p>Материал Оправы</p> <p>{product.frameMaterial}</p></div>
                      <div><p>Цвет Линз</p> <p>{product.lensColor}</p></div>
                      <div><p>Поляризация</p> <p>{product.polarization ? "Да" : "Нет"}</p></div>
                      <div><p>Зеркальная</p> <p>{product.mirrored ? "Да" : "Нет"}</p></div>
                      <div><p>Градиентная</p> <p>{product.gradient ? "Да" : "Нет"}</p></div>
                      <div><p>Материал Линз</p> <p>{product.lensMaterial}</p></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          ))}
    </>
  );
};

export default Product;

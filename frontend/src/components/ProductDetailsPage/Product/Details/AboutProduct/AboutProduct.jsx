import React from "react";
import styles from "./AboutProduct.module.scss";

const AboutProduct = ({product}) => {
  return (
    <div className={styles.aboutProduct}>
      <h3>О Товаре</h3>
      <div className={styles.descriptions}>
        <div><p>Пол</p> <p>{product.gender === "male" ? "Мужские" : "Женские"}</p></div>
        <div><p>Бренд</p> <p>{product.brand}</p></div>
        <div><p>Форма Оправы</p> <p>{product.frameForGlasses}</p></div>
        <div><p>Материал Оправы</p> <p>{product.frameMaterial}</p></div>
      </div>
    </div>
  );
};

export default AboutProduct;

import React from "react";
import styles from "./AboutProduct.module.scss";

const AboutProduct = ({gender, brand, frameForGlasses, frameMaterial}) => {
  return (
    <div className={styles.aboutProduct}>
      <h3>О Товаре</h3>
      <div className={styles.descriptions}>
        <div><p>Пол</p> <p>{gender === "male" ? "Мужские" : "Женские"}</p></div>
        <div><p>Бренд</p> <p>{brand}</p></div>
        <div><p>Форма Оправы</p> <p>{frameForGlasses}</p></div>
        <div><p>Материал Оправы</p> <p>{frameMaterial}</p></div>
      </div>
    </div>
  );
};

export default AboutProduct;

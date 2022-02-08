import React from "react";
import styles from "./Characteristic.module.scss";

const Characteristic = ({product}) => {
  return (
    <div className={styles.characteristic}>
      <h3>Детальная Информация</h3>
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
  );
};

export default Characteristic;

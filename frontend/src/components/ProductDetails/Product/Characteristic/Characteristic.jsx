import React from "react";
import styles from "./Characteristic.module.scss";

const Characteristic = ({gender, brand, frameForGlasses, frameMaterial, lensColor, polarization, mirrored, gradient, lensMaterial}) => {
  return (
    <div className={styles.characteristic}>
      <h3>Детальная Информация</h3>
      <div className={styles.descriptions}>
        <div><p>Пол</p> <p>{gender === "male" ? "Мужские" : "Женские"}</p></div>
        <div><p>Бренд</p> <p>{brand}</p></div>
        <div><p>Форма Оправы</p> <p>{frameForGlasses}</p></div>
        <div><p>Материал Оправы</p> <p>{frameMaterial}</p></div>
        <div><p>Цвет Линз</p> <p>{lensColor}</p></div>
        <div><p>Поляризация</p> <p>{polarization ? "Да" : "Нет"}</p></div>
        <div><p>Зеркальная</p> <p>{mirrored ? "Да" : "Нет"}</p></div>
        <div><p>Градиентная</p> <p>{gradient ? "Да" : "Нет"}</p></div>
        <div><p>Материал Линз</p> <p>{lensMaterial}</p></div>
      </div>
    </div>
  );
};

export default Characteristic;

import React from 'react';
import styles from "./Author.module.scss";
import image from "../../assets/image/stock/author.png";

const Author = () => {
  return (
    <section className={styles.author}>
      <div className="container">
        <div className={styles.main}>
          <p>Copyright © 2021 Все права защищены</p>
          <img src={image} alt="Методы оплаты"/>
          <a href="https://t.me/mishchnko">Created by Mishchenko Mykhailo</a>
        </div>
      </div>
    </section>
  );
};

export default Author;
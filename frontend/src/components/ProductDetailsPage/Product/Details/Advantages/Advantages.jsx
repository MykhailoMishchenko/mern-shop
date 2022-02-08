import React from "react";
import styles from "./Advantages.module.scss";
import {ReactComponent as Truck} from "../../../../../assets/image/icon/truck.svg";
import {ReactComponent as Refresh} from "../../../../../assets/image/icon/refresh.svg";
import {ReactComponent as Support} from "../../../../../assets/image/icon/support.svg";

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantage}><Truck /> <p>Доставка по Украине</p></div>
      <div className={styles.advantage}><Refresh /> <p>Возврат & Обмен</p></div>
      <div className={styles.advantage}><Support /> <p>Спрашивайте, если возникли вопросы</p></div>
    </div>
  );
};

export default Advantages;

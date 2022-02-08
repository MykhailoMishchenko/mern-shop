import React from "react";
import styles from "./AboutPayment.module.scss";
import {ReactComponent as Visa} from "../../../../../assets/image/icon/VISA.svg";
import MasterCard from "../../../../../assets/image/icon/MasterCard.png";
import NovaPoshta from "../../../../../assets/image/icon/novaposhta.png";

const AboutPayment = () => {
  return (
    <div className={styles.AboutPayment}>
      <div>
        <h3>Гарантированная безопасная оплата</h3>
        <div className={styles.line}></div>
      </div>
      <div>
        <Visa />
        <img src={MasterCard} alt="MasterCard" />
        <img src={NovaPoshta} alt="NovaPoshta" />
      </div>
    </div>
  );
};

export default AboutPayment;

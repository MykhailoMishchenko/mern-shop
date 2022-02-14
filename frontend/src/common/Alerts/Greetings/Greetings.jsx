import React from "react";
import styles from "./Greetings.module.scss";
import greeting from "../../../assets/image/icon/greeting.png";

const Greetings = ({credentials, isVisible}) => {
  return (
    <div className={isVisible ? styles.containerVisible : styles.containerHidden}>
      <div className={styles.wrapper}>
        <p>Привет, {credentials && credentials.name}! <img src={greeting} alt="Hello" /></p>
      </div>
    </div>
  );
};

export default Greetings;

import React from "react";
import styles from "./FixedBottomAlert.module.scss";

const FixedBottomAlert = ({msg, color}) => {
  return (
    <div className={color === "red" ? styles.wrapperError : styles.wrapperSuccess}>
      <p>{msg}</p>
    </div>
  );
};

export default FixedBottomAlert;

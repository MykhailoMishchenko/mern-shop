import React from "react";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({error}) => {
  return (
    <div className={styles.wrapper}>
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;

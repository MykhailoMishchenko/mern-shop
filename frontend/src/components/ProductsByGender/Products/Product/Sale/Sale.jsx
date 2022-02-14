import React from "react";
import styles from "./Sale.module.scss";

const Sale = ({sale, percent}) => {
  return (
    <>
      {
        sale
          ? <div className={styles.discount}>-{percent}% </div>
          : null
      }
    </>
  );
};

export default Sale;

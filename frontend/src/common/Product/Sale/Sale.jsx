import React from "react";
import styles from "./Sale.module.scss";

const Sale = ({percent}) => <div className={styles.discount}>-{percent}% </div>;

export default Sale;

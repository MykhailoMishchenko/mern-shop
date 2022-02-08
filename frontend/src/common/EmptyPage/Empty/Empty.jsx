import React from "react";
import styles from "./empty.module.scss";

const Empty = ({Component, text, history}) => {
  return (
    <div className={styles.emptyWrapper}>
      <Component className={styles.empty} />
      <p>{text}<span onClick={() => history.push("/")}>вернитесь назад</span></p>
    </div>
  );
};

export default Empty;

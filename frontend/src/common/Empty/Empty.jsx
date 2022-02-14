import React from "react";
import styles from "./Empty.module.scss";

const Empty = ({Component, text, span, history}) => {
  return (
    <div className={styles.main}>
      <Component/>
      {
        !!history
        ?  <p>{text} <span style={{"cursor": "pointer"}} onClick={() => history.push("/")}>{span}</span></p>
          :  <p>{text} <span>{span}</span></p>
      }
    </div>
  );
};

export default Empty;

import React from "react";
import styles from "../Filter.module.scss";

const Gender = ({config, allFilterClickListener, setState}) => {
  return (
    <>
      <h5>Пол</h5>
      <div className={styles.list}>
        {config.map(item => (
          <label key={item.id} className={styles.label}>
            <input onClick={() => allFilterClickListener(item.value, "gender", setState)} type="checkbox"
                   className={styles.input} />
            <div className={styles.value}>{item.value === "male" ? "Мужские" : "Женские"}</div>
          </label>
        ))}
      </div>
    </>
  );
};

export default Gender;

import React from "react";
import styles from "../Filter.module.scss";

const Brand = ({config, allFilterClickListener, setState}) => {
  return (
    <div>
      <h5>Бренд</h5>
      <div className={styles.list}>
        {config.map(item => (
          <label key={item.id} className={styles.label}>
            <input onClick={() => allFilterClickListener(item.value, "brand", setState)} type="checkbox"
                   className={styles.input} />
            <div className={styles.value}>{item.value}</div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Brand;

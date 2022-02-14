import React from "react";
import styles from "../Filter.module.scss";

const FrameForGlasses = ({config, allFilterClickListener, setState}) => {
  return (
    <div>
      <h5>Форма оправы</h5>
      <div className={styles.list}>
        {config.map(item => (
          <label key={item.id} className={styles.label}>
            <input onClick={() => allFilterClickListener(item.value, "frameForGlasses", setState)}
                   type="checkbox"
                   className={styles.input} />
            <div className={styles.value}>{item.img} {item.value}</div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FrameForGlasses;

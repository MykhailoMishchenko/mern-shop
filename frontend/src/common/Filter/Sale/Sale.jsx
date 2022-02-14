import React from "react";
import styles from "../Filter.module.scss";

const Sale = ({config, allFilterClickListener, setState}) => {
  return (
    <>
      <h5>Цена</h5>
      <div className={styles.list}>
        {config.map(item => (
          <label key={item.id} className={styles.label}>
            <input onClick={() => allFilterClickListener(item.value, "sale", setState)} type="checkbox"
                   className={styles.input} />
            <div className={styles.value}>
              {item.value
                ? <p>Со скидкой <i className="fas fa-check"></i></p>
                : <p>Без скидки <i className="fas fa-times"></i></p>
              }
            </div>
          </label>
        ))}
      </div>
    </>
  );
};

export default Sale;

import React from "react";
import styles from "../Filter.module.scss";

const Polarization = ({config, allFilterClickListener, setState}) => {
  return (
    <div>
      <h5>Поляризация</h5>
      <div className={styles.list}>
        {config.map(item => (
          <label key={item.id} className={styles.label}>
            <input onClick={() => allFilterClickListener(item.value, "polarization", setState)}
                   type="checkbox"
                   className={styles.input} />
            <div className={styles.value}>
              {item.value
                ? <p>С поляризацией <i className="fas fa-check"></i></p>
                : <p>Без поляризации <i className="fas fa-times"></i></p>
              }
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Polarization;

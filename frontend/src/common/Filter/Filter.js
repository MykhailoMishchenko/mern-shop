import React from "react";
import styles from "./Filter.module.scss";
import {config} from "../../utils/filter/config";

const Filter = ({filterIsActive, allFilterClickListener, isSale, setState}) => {
  return (
    <div className={filterIsActive ? styles.filterWrapperVisible : styles.filterWrapperHidden}>
      <div className={styles.filterWrapper}>
        <div>
          <h5>Поляризация</h5>
          <div className={styles.list}>
            {config.polarization.map(item => (
              <label key={item.id} className={styles.label}>
                <input onClick={ () => allFilterClickListener(item.value, "polarization", setState)}
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
        <div>
          <h5>Форма оправы</h5>
          <div className={styles.list}>
            {config.frameForGlasses.map(item => (
              <label key={item.id} className={styles.label}>
                <input onClick={() => allFilterClickListener(item.value, "frameForGlasses", setState)}
                       type="checkbox"
                       className={styles.input} />
                <div className={styles.value}>{item.img} {item.value}</div>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h5>Бренд</h5>
          <div className={styles.list}>
            {config.brand.map(item => (
              <label key={item.id} className={styles.label}>
                <input onClick={() => allFilterClickListener(item.value, "brand", setState)} type="checkbox"
                       className={styles.input} />
                <div className={styles.value}>{item.value}</div>
              </label>
            ))}
          </div>
        </div>
        <div>
          {
            isSale
              ? <>
                <h5>Пол</h5>
                <div className={styles.list}>
                  {config.gender.map(item => (
                    <label key={item.id} className={styles.label}>
                      <input onClick={() => allFilterClickListener(item.value, "gender", setState)} type="checkbox"
                             className={styles.input} />
                      <div className={styles.value}>{item.value === "male" ? "Мужские" : "Женские"}</div>
                    </label>
                  ))}
                </div>
              </>
              : <>
                <h5>Цена</h5>
                <div className={styles.list}>
                  {config.sale.map(item => (
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
          }

        </div>
      </div>
    </div>
  );
};

export default Filter;

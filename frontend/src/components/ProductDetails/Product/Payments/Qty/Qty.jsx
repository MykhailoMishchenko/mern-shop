import React from "react";
import styles from "./Qty.module.scss";

const Qty = ({countInStock, qty, setQty}) => {
  return (
    <div className={countInStock ? styles.Qty : styles.QtyDisabled}>
      <p>кол-во</p>
      {
        countInStock > 0 ? (
          <select
            value={qty}
            onChange={e => setQty(e.target.value)}
          >
            {
              [...Array(countInStock).keys()].map(x => (
                <option
                  key={x + 1}
                  value={x + 1}
                >{x + 1}</option>
              ))
            }
          </select>
        ) : <p>0</p>
      }
    </div>
  );
};

export default Qty;

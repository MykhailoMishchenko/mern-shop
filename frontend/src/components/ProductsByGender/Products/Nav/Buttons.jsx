import React from "react";
import styles from "./Buttons.module.scss";
import {ReactComponent as FilterImg} from "../../../../assets/image/icon/filter.svg";

const Buttons = ({isGrid, changeToLineHandler, changeToGridHandler, setFilter, setSort, sortPrice}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <span onClick={setFilter}><FilterImg /></span>
      </div>
      <div className={styles.grid}>
        <i
          className={isGrid ? "fas fa-grip-lines filter_icon" : "fas fa-grip-lines filter_icon active_icon"}
          onClick={changeToLineHandler}
        >
        </i>
        <i
          className={isGrid ? "fas fa-grip-horizontal filter_icon active_icon" : "fas fa-grip-horizontal filter_icon"}
          onClick={changeToGridHandler}
        >
        </i>
      </div>
      <div className={styles.fromTo}>
        <p onClick={setSort}>
          Цена
          <i className={sortPrice ? "fas fa-arrow-up sort_icon" : "fas fa-arrow-up"}></i>
        </p>
      </div>
    </div>
  );
};

export default Buttons;

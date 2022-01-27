import React from "react";
import styles from "./Nav.module.scss";
import {ReactComponent as Share} from "../../../assets/image/icon/share.svg";
import {useHistory} from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  return (
    <div className={styles.wrapperHeader}>
      <div className="container">
        <nav>
          <p onClick={() => history.goBack()}>Назад</p>
          <div className={styles.share}><Share /> <p>Поделиться</p></div>
        </nav>
        <header>
          <h2>Для женщин</h2>
        </header>
      </div>
    </div>
  );
};

export default Nav;

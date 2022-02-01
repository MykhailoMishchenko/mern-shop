import React from "react";
import styles from "./Nav.module.scss";
import {ReactComponent as Share} from "../../../assets/image/icon/share.svg";
import {useHistory} from "react-router-dom";

const Nav = ({gender, sale}) => {
  const history = useHistory();
  return (
    <div className={styles.wrapperHeader}>
      <div className="container">
        <nav>
          <p onClick={() => history.goBack()}>Назад</p>
          <div className={styles.share}><Share /> <p>Поделиться</p></div>
        </nav>
        <header>
          {
            sale
            ? <h2>По скидке</h2>
            : <h2>{gender === "female" ? "Для женщин" : "Для мужчин"}</h2>
          }

        </header>
      </div>
    </div>
  );
};

export default Nav;

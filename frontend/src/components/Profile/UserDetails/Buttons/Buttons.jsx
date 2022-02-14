import React from "react";
import styles from "./Buttons.module.scss";

const Buttons = ({updateProfileLoading, disabled, updateProfile, logout}) => {
  return (
    <div className={styles.groupBtn}>
      {
        updateProfileLoading
          ? <button className={styles.disable}>
            <span className={styles.disableText}>Обновляем Ваши данные</span>
          </button>
          : <button
            disabled={disabled}
            className={disabled ? styles.dsbl : ""}
            onClick={updateProfile}>
            Обновить мои данные
          </button>
      }
      <button
        className={styles.logout}
        onClick={logout}>
        Выйти
      </button>
    </div>
  );
};

export default Buttons;

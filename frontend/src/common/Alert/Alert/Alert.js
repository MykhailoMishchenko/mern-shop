import React, {useState} from "react";
import styles from "./alert.module.scss";
import greeting from "../../../assets/image/icon/greeting.png";

const Alert = ({credentials, isVisible}) => {

  const [state, setState] = useState(true);

  // useEffect(() => {
  //     setTimeout(() => {
  //       setState(true)
  //     }, 5000)
  //   if (state) {
  //     setTimeout(() => {
  //       setState(false)
  //     }, 5000)
  //   }
  // },[state])

  return (
    <div className={isVisible ? styles.containerVisible : styles.containerHidden}>
      <div className={styles.wrapper}>
        <p>Привет, {credentials && credentials.name}! <img src={greeting} alt="Hello" /></p>
      </div>
    </div>
  );
};

export default Alert;

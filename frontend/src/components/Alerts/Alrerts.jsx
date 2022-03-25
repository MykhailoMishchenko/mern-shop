import React from "react";
import Greetings from "../../common/Alerts/Greetings/Greetings";
import Alert from "../../common/Alerts/Alert/Alert";

const Alrerts = ({credentials, successAlert, removeAlert, addAlert, removeAlertFavorite, addAlertFavorite}) => {
  return (
    <>
      <Greetings credentials={credentials} isVisible={successAlert} />
      {removeAlert && <Alert color="green" msg="Товар успешно удален из Вашей корзины!" />}
      {addAlert && <Alert color="green" msg="Товар успешно добавлен в Вашу корзину!" />}
      {removeAlertFavorite && <Alert color="green" msg="Товар успешно удален из Вашего списка избранного!" />}
      {addAlertFavorite && <Alert color="green" msg="Товар успешно добавлен в Ваш список избранного!" />}
    </>
  );
};

export default Alrerts;

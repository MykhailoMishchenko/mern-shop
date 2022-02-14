import React from "react";
import Alert from "../../../../common/Alerts/Alert/Alert";

const Alerts = ({success, error}) => {
  return (
    <>
      {success && <Alert color="green" msg="Ваши данные успешно обновлены!" />}
      {error && <Alert color="red" msg="Что-то пошло не так! Попробуйте позже" />}
    </>
  );
};

export default Alerts;

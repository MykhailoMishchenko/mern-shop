import React from "react";
import styles from "./userOrders.module.scss";

const UserOrders = () => {
  return (
    <div className={styles.container}>
      <h4>Мои заказы</h4>
      <table className="styled-table">
        <thead>
        <tr>
          <th>Номер Заказа</th>
          <th>Дата</th>
          <th>Всего к оплате</th>
          <th>Оплата</th>
          <th>Доставка</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Номер заказа</td>
          <td>2021</td>
          <td>856 грн</td>
          <td>Нет оплаты</td>
          <td>Нет доставки</td>
          <td>Детали</td>
        </tr>
        <tr>
          <td>Номер заказа</td>
          <td>2021</td>
          <td>856 грн</td>
          <td>Нет оплаты</td>
          <td>Нет доставки</td>
          <td>Детали</td>
        </tr>
        <tr>
          <td>Номер заказа</td>
          <td>2021</td>
          <td>856 грн</td>
          <td>Нет оплаты</td>
          <td>Нет доставки</td>
          <td>Детали</td>
        </tr><tr>
          <td>Номер заказа</td>
          <td>2021</td>
          <td>856 грн</td>
          <td>Нет оплаты</td>
          <td>Нет доставки</td>
          <td>Детали</td>
        </tr><tr>
          <td>Номер заказа</td>
          <td>2021</td>
          <td>856 грн</td>
          <td>Нет оплаты</td>
          <td>Нет доставки</td>
          <td>Детали</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserOrders;

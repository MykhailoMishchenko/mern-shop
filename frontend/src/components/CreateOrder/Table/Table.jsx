import React from "react";
import styles from "./Table.module.scss";

const Table = ({shipping: {city, country, address, postalOffice}, payment, cartItems, isPaid, isDelivered}) => {
  return (
    <div className={styles.detailsContainer}>
      <table className="styled-table">
        <thead>
        <tr>
          <th>Детали Заказа</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Адрес</td>
          <td>{city}, {country}. {address}. Отделение Новой почты - {postalOffice}</td>
        </tr>
        <tr>
          <td>Метод оплаты</td>
          <td>{payment}</td>
        </tr>
        <tr>
          <td>Количество товаров</td>
          <td>{cartItems.length}</td>
        </tr>
        <tr>
          <td>Оплата</td>
          <td>{isPaid ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</td>
        </tr>
        <tr>
          <td>Доставка</td>
          <td>{isDelivered ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

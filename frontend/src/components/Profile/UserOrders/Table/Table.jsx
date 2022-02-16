import React from "react";
import styles from "./Table.module.scss";
import {format} from "date-fns";
import {useHistory} from "react-router-dom";

const Table = ({orders}) => {

  const history = useHistory();

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
        {
          !!orders
            ? <tbody>
            {
              orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    {format(new Date(order.createdAt), "MM/dd/yyyy")}
                  </td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid ? "Оплачено" : "Не оплачено"}</td>
                  <td>{order.isDelivered ? "Доставлено" : "Не доставлено"}</td>
                  <td><button onClick={() => history.push(`/order/${order._id}`)}>Детали</button></td>
                </tr>
              ))
            }
            </tbody>
            : <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
            </tbody>
        }
      </table>
    </div>
  );
};

export default Table;

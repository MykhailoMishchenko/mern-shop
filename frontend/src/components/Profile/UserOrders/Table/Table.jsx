import React from "react";
import styles from "./Table.module.scss";
import {format} from "date-fns";
import {useHistory} from "react-router-dom";
import {ReactComponent as EmptyOrders} from "../../../../assets/image/storyset/emptyOrders.svg";
import Empty from "../Empty/Empty";

const Table = ({orders}) => {

  const history = useHistory();

  return (
    <div className={styles.container}>
      {
        orders.length === 0
          ? <Empty Component={EmptyOrders} />
          : <table className="styled-table">
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
            {
              orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    {format(new Date(order.createdAt), "MM/dd/yyyy")}
                  </td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</td>
                  <td>
                    {
                      order.isDelivered
                        ? <i className="fas fa-check"></i>
                        : <i className="fas fa-times"></i>
                    }
                  </td>
                  <td>
                    <button onClick={() => history.push(`/order/${order._id}`)}>Детали</button>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
      }
    </div>
  );
};

export default Table;

import React, {useEffect} from "react";
import styles from "./Customers.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getCustomers} from "../../../redux/Admin/Customers/actions";
import {useHistory} from "react-router-dom";


const Customers = () => {

  const {customers, loading, error} = useSelector(state => state?.admin);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  return (
    <div className={styles.container}>
      <h4>Клиенты</h4>
      <div className={styles.wrapper}>
        <table className={styles.styledTable}>
          <thead>
          <tr>
            <th>Имя Клиента</th>
            <th>Ел. Почта</th>
            <th>Является ли Администратором</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {
            customers?.map(customer => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.isAdmin ? "Администратор" : "Клиент"}</td>
                <td className={styles.lastTd}>
                  <button className={styles.btn}>Детальнее</button>
                  <button className={styles.delete}>Удалить</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;

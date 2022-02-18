import React from "react";
import styles from "./AdminSettings.module.scss";
import customers from "../../../assets/image/stock/admin-customers.jpg"
import orders from "../../../assets/image/stock/admin-orders.jpg"
import products from "../../../assets/image/stock/admin-products.jpg"
import analytics from "../../../assets/image/stock/admin-analytics.jpg"
import {NavLink} from "react-router-dom";

const AdminSettings = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Админ Панель</h4>
      <div className={styles.wrapper}>
        <div>
          <img src={customers} alt="" />
          <NavLink to="/admin/customers">Клиенты</NavLink>
        </div>
        <div>
          <img src={orders} alt="" />
          <NavLink to="/admin/orders">Заказы</NavLink>
        </div>
        <div>
          <img src={products} alt="" />
          <NavLink to="/admin/products">Продукция</NavLink>
        </div>
        <div>
          <img src={analytics} alt="" />
          <NavLink to="/admin/analytics">Графики</NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;

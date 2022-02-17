import React from "react";
import styles from "../CreateOrder/CreateOrder.module.scss";
import Table from "../CreateOrder/Table/Table";
import YourOrder from "../CreateOrder/YourOrder/YourOrder";
import Summary from "./Summary/Summary";

const Order = ({data}) => {
  return (
    <>
      {
        data !== undefined
        ?
          <>
            <div className={styles.container}>
              <Table
                shipping={data.shippingAddress}
                payment={data.paymentMethod}
                cartItems={data.orderItems}
              />
              <Summary
                taxPrice={data.taxPrice}
                totalPrice={data.totalPrice}
                cartItems={data.orderItems}
                shipping={data.shippingAddress}
                payment={data.paymentMethod} />
            </div>
            <YourOrder cartItems={data.orderItems} />
          </>
          : null
      }
    </>
  );
};

export default Order;

import React from "react";
import styles from "../CreateOrder/CreateOrder.module.scss";
import Table from "../CreateOrder/Table/Table";
import YourOrder from "../CreateOrder/YourOrder/YourOrder";
import {useGetOrderQuery} from "../../redux/Order/GetOrderById/getOrderById";
import Summary from "./Summary/Summary";
import Spinner from "../../common/Spinner/Spinner";

const Order = ({match}) => {

  const {data, isLoading, error} = useGetOrderQuery(match.params.id);

  return (
    <>
      {
        isLoading
          ? <Spinner/>
          : <>
            <div className={styles.container}>
              <Table
                isDelivered={data.isDelivered}
                isPaid={data.isPaid}
                shipping={data.shippingAddress}
                payment={data.paymentMethod}
                cartItems={data.orderItems}
              />
              <Summary
                cartItems={data.orderItems}
                taxPrice={data.taxPrice}
                totalPrice={data.totalPrice}
                paymentMethod={data.paymentMethod}
              />
            </div>
            <YourOrder cartItems={data.orderItems} />
          </>
      }
    </>
  );
};

export default Order;

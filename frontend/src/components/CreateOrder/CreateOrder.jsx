import React from "react";
import styles from "./CreateOrder.module.scss";
import Table from "./Table/Table";
import Summary from "./Summary/Summary";
import YourOrder from "./YourOrder/YourOrder";
import {useSelector} from "react-redux";

const CreateOrder = () => {

  const {
      shipping, payment
    } = useSelector(state => state?.order),
    {cartItems} = useSelector(state => state?.cart);

  return (
    <>
      <div className={styles.container}>
        <Table
          shipping={shipping}
          payment={payment}
          cartItems={cartItems}
        />
        <Summary cartItems={cartItems} />
      </div>
      <YourOrder cartItems={cartItems} />
    </>
  );
};

export default CreateOrder;

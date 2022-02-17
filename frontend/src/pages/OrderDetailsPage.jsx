import React from "react";
import Order from "../components/Order/Order";

const OrderDetailsPage = ({match}) => {
  return (
    <div className="container">
      <Order match={match}/>
    </div>
  );
};

export default OrderDetailsPage;

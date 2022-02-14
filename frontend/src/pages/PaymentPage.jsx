import React from "react";
import Steps from "../common/Steps/Steps";
import Payment from "../components/Payment/Payment";

const PaymentPage = () => {
  return (
    <>
      <Steps step1 step2 />
      <div className="container">
        <Payment />
      </div>
    </>
  );
};

export default PaymentPage;

import React from "react";
import Steps from "../components/CreateOrder/Steps/Steps";
import PaymentForm from "../components/CreateOrder/Payment/PaymentForm";

const PaymentsPage = () => {
  return (
    <div>
      <Steps step1 step2/>
      <div className="container">
        <PaymentForm/>
      </div>
    </div>
  );
};

export default PaymentsPage;

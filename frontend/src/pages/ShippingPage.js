import React from "react";
import Steps from "../components/CreateOrder/Steps/Steps";
import ShippingForm from "../components/CreateOrder/Shipping/ShippingForm";

const ShippingPage = () => {
  return (
    <div>
      <Steps step1/>
      <div className="container">
        <ShippingForm/>
      </div>
    </div>
  );
};

export default ShippingPage;

import React from "react";
import Steps from "../common/Steps/Steps";
import Shipping from "../components/Shipping/Shipping";

const ShippingPage = () => {
  return (
    <>
     <Steps step1/>
      <div className="container">
        <Shipping/>
      </div>
    </>
  );
};

export default ShippingPage;

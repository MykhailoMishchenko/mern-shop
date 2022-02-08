import React from "react";
import Steps from "../components/CreateOrder/Steps/Steps";
import Order from "../components/CreateOrder/CreateOrder/Order";

const CreateOrder = () => {
  return (
    <div>
      <Steps step1 step2 step3/>
      <div className="container">
        <Order/>
      </div>
    </div>
  );
};

export default CreateOrder;

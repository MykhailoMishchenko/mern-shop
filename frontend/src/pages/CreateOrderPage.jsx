import React from "react";
import Steps from "../common/Steps/Steps";
import CreateOrder from "../components/CreateOrder/CreateOrder";

const CreateOrderPage = () => {
  return (
    <>
     <Steps step1 step2 step3/>
      <div className="container">
        <CreateOrder/>
      </div>
    </>
  );
};

export default CreateOrderPage;

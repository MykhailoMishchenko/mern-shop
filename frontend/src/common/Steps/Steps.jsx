import React from "react";
import styles from "./Steps.module.scss";
import StepOne from "./Step/StepOne";
import StepTwo from "./Step/StepTwo";
import StepThree from "./Step/StepThree";


const Steps = ({step1, step2, step3}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.progressbar}>
        <StepOne step1={step1} />
        <StepTwo step2={step2} />
        <StepThree step3={step3} />
      </ul>
    </div>
  );
};

export default Steps;
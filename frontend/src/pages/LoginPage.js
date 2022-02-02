import React from "react";
import FormLogin from "../components/LoginPage/FormLogin";
import Title from "../common/Title/Title";

const LoginPage = () => {
  return (
    <div className="container">
      <Title title="Добро пожаловать"/>
     <FormLogin/>
    </div>
  );
};

export default LoginPage;

import React from "react";
import TitlePage from "../common/TitlePage/TitlePage";
import Form from "../components/Authorization/Form";

const LoginPage = () => {
  return (
    <div className="container">
      <TitlePage title="Добро пожаловать!"/>
      <Form/>
    </div>
  );
};

export default LoginPage;

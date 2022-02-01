import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop/ScrollToTop";
import TopNav from "./components/TopNav/TopNav";
import MaiNav from "./components/MainNav/MaiNav";
import Footer from "./components/Footer/Footer";
import Author from "./components/Author/Author";
import HomePage from "./pages/HomePage";
import {
  useGetFemaleProductsQuery
} from "./redux/Products/productsApi";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import {useSelector} from "react-redux";
import FixedBottomAlert from "./common/Alert/FixedBottomAlert/FixedBottomAlert";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import SalePage from "./pages/SalePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const {
    removeAlert,
    addAlert
  } = useSelector(state => state?.cart)
  return (
    <>
      <Router>
        <ScrollToTop />
        <TopNav/>
        <MaiNav/>
        <Route path="/" component={HomePage} exact/>
        <Route path="/women" component={WomenPage} exact/>
        <Route path="/men" component={MenPage} exact/>
        <Route path="/sales" component={SalePage} exact/>
        <Route path="/product/:id" component={ProductDetailsPage}/>
        <Route path="/cart/:id?" component={CartPage}/>
        <Route path="/login" component={LoginPage} exact/>
        <Footer/>
        <Author/>
      </Router>
      { removeAlert && <FixedBottomAlert msg="Товар успешно удален из Вашей корзины!" color="green" />}
      { addAlert && <FixedBottomAlert msg="Товар успешно добавлен в Вашу корзину!" color="green" />}
    </>
  );
};

export default App;

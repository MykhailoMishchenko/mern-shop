import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop/ScrollToTop";
import TopNav from "./components/TopNav/TopNav";
import MaiNav from "./components/MainNav/MaiNav";
import Footer from "./components/Footer/Footer";
import Author from "./components/Author/Author";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import {useSelector} from "react-redux";
import FixedBottomAlert from "./common/Alert/FixedBottomAlert/FixedBottomAlert";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import SalePage from "./pages/SalePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./HOC/PrivateRoute";
import PublicRoute from "./HOC/PublicRoute";
import Greeting from "./common/Alert/Greeting/Greeting";
import FavoriteProductsPage from "./pages/FavoriteProductsPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentsPage from "./pages/PaymentsPage";
import CreateOrder from "./pages/CreateOrderPage";

const App = () => {
  const {
    removeAlert,
    addAlert
  } = useSelector(state => state?.cart)
  const {
    removeAlert: removeAlertFavorite,
    addAlert: addAlertFavorite
  } = useSelector(state => state?.favorite)
  const {
    credentials, successAlert
  } = useSelector(state => state?.login)


  return (
    <>
      <Router>
        <ScrollToTop />
        <TopNav/>
        <MaiNav/>
        <PublicRoute path="/login" redirectTo="/" component={LoginPage} exact restricted/>
        <Route path="/" component={HomePage} exact/>
        <Route path="/women" component={WomenPage} exact/>
        <Route path="/men" component={MenPage} exact/>
        <Route path="/sales" component={SalePage} exact/>
        <Route path="/product/:id" component={ProductDetailsPage}/>
        <Route path="/cart/:id?" component={CartPage}/>
        <PrivateRoute path="/favorite/:id?" component={FavoriteProductsPage}/>
        <PrivateRoute path="/shipping" component={ShippingPage} exact/>
        <PrivateRoute path="/payment" component={PaymentsPage} exact/>
        <PrivateRoute path="/create-order" component={CreateOrder} exact/>
        <PrivateRoute path="/profile" component={ProfilePage} exact/>
        <Footer/>
        <Author/>
      </Router>
      <Greeting credentials={credentials} isVisible={successAlert}/>
      { removeAlert && <FixedBottomAlert msg="Товар успешно удален из Вашей корзины!" color="green" />}
      { addAlert && <FixedBottomAlert msg="Товар успешно добавлен в Вашу корзину!" color="green" />}
      { removeAlertFavorite && <FixedBottomAlert msg="Товар успешно удален из Вашего списка избранного!" color="green" />}
      { addAlertFavorite && <FixedBottomAlert msg="Товар успешно добавлен в Ваш список избранного!" color="green" />}
    </>
  );
};

export default App;

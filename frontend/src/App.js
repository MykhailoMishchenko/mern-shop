import React, {Suspense} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "./HOC/PrivateRoute";
import PublicRoute from "./HOC/PublicRoute";
import RedirectToOrderRoute from "./HOC/RedirectToOrderRoute";
import AdminRoute from "./HOC/AdminRoute";
import {useSelector} from "react-redux";
import ScrollToTop from "./common/ScrollToTop/ScrollToTop";
import TopNav from "./components/Nav/TopNav/TopNav";
import Nav from "./components/Nav/Nav/Nav";
import Alert from "./common/Alerts/Alert/Alert";
import Greetings from "./common/Alerts/Greetings/Greetings";
import Footer from "./components/Footer/Footer";
import Author from "./components/Author/Author";
import {
  AdminCustomers,
  CartPage, CreateOrderPage,
  FavoriteProductsPage,
  HomePage,
  LoginPage,
  MenPage, OrderDetailsPage, PaymentPage,
  ProductDetailsPage, ProfilePage,
  SalesPage, ShippingPage,
  WomenPage
} from "./pages";


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
    <Suspense fallback={"Loading..."}>
      <Router>
        <ScrollToTop />
        <TopNav />
        <Nav />
        <PublicRoute path="/login" redirectTo="/" component={LoginPage} exact restricted />
        <Route path="/" component={HomePage} exact />
        <Route path="/women" component={WomenPage} exact />
        <Route path="/men" component={MenPage} exact />
        <Route path="/sales" component={SalesPage} exact />
        <Route path="/product/:id" component={ProductDetailsPage} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/favorite/:id?" component={FavoriteProductsPage} />
        <PrivateRoute path="/profile" component={ProfilePage} exact />
        <PrivateRoute path="/shipping" component={ShippingPage} exact />
        <PrivateRoute path="/payment" component={PaymentPage} exact />
        <RedirectToOrderRoute path="/create-order" component={CreateOrderPage} exact restricted/>
        <PrivateRoute path="/order/:id" component={OrderDetailsPage} exact />

        <AdminRoute path="/admin/customers" component={AdminCustomers} exact/>
        <Footer />
        <Author />
      </Router>
      <Greetings credentials={credentials} isVisible={successAlert} />
      {removeAlert && <Alert color="green" msg="Товар успешно удален из Вашей корзины!"/>}
      {addAlert && <Alert color="green" msg="Товар успешно добавлен в Вашу корзину!"/>}
      {removeAlertFavorite && <Alert color="green" msg="Товар успешно удален из Вашего списка избранного!"/>}
      {addAlertFavorite && <Alert color="green" msg="Товар успешно добавлен в Ваш список избранного!"/>}
    </Suspense>
  );
};

export default App;

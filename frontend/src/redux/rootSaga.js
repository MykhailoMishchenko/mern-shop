import {all} from "redux-saga/effects";
import {addProductToCardWatcher} from "./Cart/addProductToCart/saga";
import {removeProductFromCartWatcher} from "./Cart/removeProductFromCart/saga";
import {loginWatcher} from "./Users/Login/saga";
import {addProductToFavoriteWatcher} from "./Favorite/addProductToFavorite/saga";
import {removeProductFromFavoriteWatcher} from "./Favorite/removeProductFromFavorite/saga";
import {registerWatcher} from "./Users/Register/saga";
import {getUserDetailsWatcher} from "./Users/Details/saga";
import {logoutWatcher} from "./Users/Logout/saga";
import {updateUserDetailsWatcher} from "./Users/UpdateDetails/saga";
import {createOrderWatcher} from "./Order/CreateOrderServer/saga";
import {getMyOrdersWatcher} from "./Order/MyOrders/saga";
import {removeAllFromCartWatcher} from "./Cart/removeAllProductFromCart/saga";
import {getCustomerWatcher} from "./Admin/Customers/saga";

function* rootSaga(){
  yield all(
    [
      addProductToCardWatcher(), removeProductFromCartWatcher(),
      loginWatcher(), logoutWatcher(), registerWatcher(),
      addProductToFavoriteWatcher(), removeProductFromFavoriteWatcher(),
      getUserDetailsWatcher(), updateUserDetailsWatcher(), createOrderWatcher(),
      getMyOrdersWatcher(), removeAllFromCartWatcher(), getCustomerWatcher()
    ]
  );
}

export default rootSaga;
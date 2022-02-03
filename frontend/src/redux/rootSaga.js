import {all} from "redux-saga/effects";
import {addProductToCardWatcher} from "./Cart/addProductToCart/saga";
import {removeProductFromCartWatcher} from "./Cart/removeProductFromCart/saga";
import {loginWatcher} from "./Users/Login/saga";
import {addProductToFavoriteWatcher} from "./Favorite/addProductToFavorite/saga";
import {removeProductFromFavoriteWatcher} from "./Favorite/removeProductFromFavorite/saga";
import {registerWatcher} from "./Users/Register/saga";

function* rootSaga(){
  yield all(
    [
      addProductToCardWatcher(), removeProductFromCartWatcher(),
      loginWatcher(), addProductToFavoriteWatcher(),
      removeProductFromFavoriteWatcher(), registerWatcher()
    ]
  );
}

export default rootSaga;
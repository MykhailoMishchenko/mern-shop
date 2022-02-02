import {all} from "redux-saga/effects";
import {addProductToCardWatcher} from "./Cart/addProductToCart/saga";
import {removeProductFromCartWatcher} from "./Cart/removeProductFromCart/saga";
import {loginWatcher} from "./Users/Login/saga";

function* rootSaga(){
  yield all([addProductToCardWatcher(), removeProductFromCartWatcher(), loginWatcher()]);
}

export default rootSaga;
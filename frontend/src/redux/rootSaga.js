import {all} from "redux-saga/effects";
import {addProductToCardWatcher} from "./Cart/addProductToCart/saga";
import {removeProductFromCartWatcher} from "./Cart/removeProductFromCart/saga";



function* rootSaga(){
  yield all([addProductToCardWatcher(), removeProductFromCartWatcher()]);
}

export default rootSaga;
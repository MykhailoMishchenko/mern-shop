import {delay, put, select, takeLatest} from "redux-saga/effects";
import {hideSuccessRemoveAlert, removeFromCart, showSuccessRemoveAlert} from "../action";
import {REMOVE_PRODUCT_FROM_CART, REMOVE_PRODUCT_FROM_CART_REQUEST} from "../constans";

function* worker({payload: id}){
  yield put(removeFromCart(id));
  const cartItems = yield select(store => store.cart.cartItems)
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  yield put(showSuccessRemoveAlert());
  yield delay(2000);
  yield put(hideSuccessRemoveAlert());
}

export function* removeProductFromCartWatcher(){
  yield takeLatest(REMOVE_PRODUCT_FROM_CART_REQUEST, worker);
}
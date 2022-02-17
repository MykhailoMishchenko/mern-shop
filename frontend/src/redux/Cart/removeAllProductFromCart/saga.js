import {put, takeLatest} from "redux-saga/effects";
import {removeAllFromCart} from "../actions";
import {CREATE_ORDER_REQUEST} from "../../Order/CreateOrderServer/constans";

function* worker() {
  yield put(removeAllFromCart())
  yield localStorage.removeItem("cartItems")
}

export function* removeAllFromCartWatcher(){
  yield takeLatest(CREATE_ORDER_REQUEST, worker)
}
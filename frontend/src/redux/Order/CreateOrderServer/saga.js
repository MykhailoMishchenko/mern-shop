import axios from "axios";
import {call, delay, put, select, takeLatest} from "redux-saga/effects";
import {
  createOrderFailure,
  createOrderHideAlert,
  createOrderShowAlert,
  createOrderSuccess
} from "./action";
import {CREATE_ORDER_REQUEST} from "./constans";

const createOrderRequest = (order, token) => axios.post("/api/orders/add-order", order, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});


function* worker({payload: {itemsPrice, orderItems, paymentMethod, shippingAddress, shippingPrice, taxPrice, totalPrice}}){
  try {
    const token = yield select(store => store.login.credentials.token);
    const {data} = yield call(createOrderRequest, {
      itemsPrice,
      orderItems,
      paymentMethod,
      shippingAddress,
      shippingPrice,
      taxPrice,
      totalPrice
    }, token);
    yield put(createOrderSuccess(data));
    yield put(createOrderShowAlert());
    yield delay(5000);
    yield put(createOrderHideAlert());
  } catch (error) {
    yield put(createOrderFailure(error));
  }
}

export function* createOrderWatcher(){
  yield takeLatest(CREATE_ORDER_REQUEST, worker);
}
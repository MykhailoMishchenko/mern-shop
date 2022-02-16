import axios from "axios";
import {call, put, select, takeEvery} from "redux-saga/effects";
import {getMyOrdersFailure, getMyOrdersSuccess} from "./actions";
import {GET_MY_ORDERS_REQUEST} from "./constans";

const getMyOrdersRequest = (token) => axios.get("/api/orders/my-orders", {
  headers: {
    "Authorization": `Bearer ${token}`
  }
});

function* worker(){
  try {
    const token = yield select(state => state.login.credentials.token);
    const {data} = yield call(getMyOrdersRequest, token);
    yield put(getMyOrdersSuccess(data));
  } catch (error) {
    yield put(getMyOrdersFailure(error));
  }
}

export function* getMyOrdersWatcher() {
  yield takeEvery(GET_MY_ORDERS_REQUEST, worker)
}
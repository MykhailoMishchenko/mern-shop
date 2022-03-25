import axios from "axios";
import {call, put, select, takeEvery} from "redux-saga/effects";
import {getCustomersFailure, getCustomersSuccess} from "./actions";
import {GET_CUSTOMERS_REQUEST} from "./constans";

const getCustomersRequest = (token) => axios.get("/api/users", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

function* worker(){
  try {
    const token = yield select(store => store.login.credentials.token);
    const {data} = yield call(getCustomersRequest, token);
    yield put(getCustomersSuccess(data));
  } catch (error) {
    yield put(getCustomersFailure(error));
  }
}

export function* getCustomerWatcher() {
  yield takeEvery(GET_CUSTOMERS_REQUEST, worker)
}
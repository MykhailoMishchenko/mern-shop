import {logoutSuccess} from "./actions";
import {put, takeLatest} from "redux-saga/effects";
import {USER_LOGOUT_REQUEST} from "./constans";

function* worker(){
  yield put(logoutSuccess());
  yield localStorage.removeItem("userCredentials");
}

export function* logoutWatcher(){
  yield takeLatest(USER_LOGOUT_REQUEST, worker);
}
import axios from "axios";
import {call, delay, put, takeLatest} from "redux-saga/effects";
import {hideError, hideGreetings, loginFail, loginSuccess, showError, showGreetings} from "./actions";
import {LOGIN_REQUEST} from "./constans";

const authorization = ({email, password}) => axios.post("/api/users/login", {email, password});

function* worker({payload: {email, password}}){
  try {
    const {data} = yield call(authorization, {email, password});
    yield put(loginSuccess(data));
    yield localStorage.setItem("userCredentials", JSON.stringify(data));
    yield put(showGreetings());
    yield delay(5000);
    yield put(hideGreetings());
  } catch (error) {
    if (error.message === "Request failed with status code 401") {
      yield put(loginFail("Не верный логин или пароль"));
    } else yield put(loginFail(error.message));
    yield put(showError());
    yield delay(5000);
    yield put(hideError());
  }
}

export function* loginWatcher(){
  yield takeLatest(LOGIN_REQUEST, worker);
}
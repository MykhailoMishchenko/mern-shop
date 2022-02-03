import axios from "axios";
import {call, delay, put, takeLatest} from "redux-saga/effects";
import {registerFail, registerSuccess} from "./actions";
import {login} from "../Login/actions";
import {REGISTER_REQUEST} from "./constans";

const registration = ({email, password, name}) => axios.post("/api/users/register", {email, password, name});

function* worker({payload: {email, password, name}}){
  try {
    const {data} = yield call(registration, {email, password, name});
    yield put(registerSuccess(data));
    yield put(login({email, password}));
    yield localStorage.setItem("userCredentials", JSON.stringify(data));
  } catch (error) {
    if (error.message === "Request failed with status code 401") {
      yield put(registerFail("Не верный логин или пароль"));
    } else yield put(registerFail(error.message));
  }
}

export function* registerWatcher(){
  yield takeLatest(REGISTER_REQUEST, worker);
}
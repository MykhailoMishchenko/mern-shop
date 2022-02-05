import axios from "axios";
import {call, delay, put, select, takeLatest} from "redux-saga/effects";
import {getUserDetailsSuccess} from "../Details/actions";
import {UPDATE_USER_DETAILS_REQUEST} from "./constans";
import {
  updateUserDetailsFailure,
  updateUserDetailsFailureHideAlert,
  updateUserDetailsFailureShowAlert,
  updateUserDetailsSuccessHideAlert,
  updateUserDetailsSuccessShowAlert
} from "./actions";

const updateDetails = ({id, name, email, password}, token) => axios.put("api/users/profile", {
  id,
  name,
  email,
  password
}, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

function* worker({payload: {id, name, email, password}}){
  try {
    const token = yield select(store => store.login.credentials.token);
    const {data} = yield call(updateDetails, {id, name, email, password}, token);
    yield put(getUserDetailsSuccess(data));
    yield put(updateUserDetailsSuccessShowAlert());
    yield delay(3000);
    yield put(updateUserDetailsSuccessHideAlert());
  } catch (error) {
    yield put(updateUserDetailsFailure(error.message));
    yield put(updateUserDetailsFailureShowAlert());
    yield delay(3000);
    yield put(updateUserDetailsFailureHideAlert());
  }
}

export function* updateUserDetailsWatcher(){
  yield takeLatest(UPDATE_USER_DETAILS_REQUEST, worker);
}
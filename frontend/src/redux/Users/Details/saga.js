import axios from "axios";
import {call, put, select, takeLatest} from "redux-saga/effects";
import {getUserDetailsFailure, getUserDetailsSuccess} from "./actions";
import {USER_DETAILS_REQUEST} from "./constans";

const getUser = (id, token) => axios.get(`/api/users/${id.payload}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

function* worker(payload) {
  try {
    const token = yield select(store => store.login.credentials.token)
    const {data} = yield call(getUser, payload, token)
    yield put(getUserDetailsSuccess(data))
  } catch (error) {
    yield put(getUserDetailsFailure(error.message))
  }
}

export function* getUserDetailsWatcher() {
  yield takeLatest(USER_DETAILS_REQUEST, worker)
}
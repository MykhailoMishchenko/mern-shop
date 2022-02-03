import {delay, put, select, takeLatest} from "redux-saga/effects";
import {hideRemoveAlert, removeFromFavorite, showRemoveAlert} from "../actions";
import {REMOVE_PRODUCT_FROM_FAVORITE_REQUEST} from "../constans";

function* worker({payload: id}){
  yield put(removeFromFavorite(id));
  const favoriteItems = yield select(store => store.favorite.favoriteItems);
  yield localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  yield put(showRemoveAlert());
  yield delay(2000);
  yield put(hideRemoveAlert());
}

export function* removeProductFromFavoriteWatcher() {
  yield takeLatest(REMOVE_PRODUCT_FROM_FAVORITE_REQUEST, worker);
}
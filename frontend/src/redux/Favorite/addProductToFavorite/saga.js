import axios from "axios";
import {call, delay, put, select, takeLatest} from "redux-saga/effects";
import {addToFavoriteFailure, addToFavoriteSuccess, hideAddAlert, showAddAlert} from "../actions";
import {ADD_PRODUCT_TO_FAVORITE_REQUEST} from "../constans";

const addToFavorite = id => axios.get(`/api/products/${id}`);

function* worker({payload: {id}}){
  try {
    const {data} = yield call(addToFavorite, id);
    const {_id, name, image, brand, category, gender, sale, percent, price, countInStock} = data;
    yield put(
      addToFavoriteSuccess(
        {
          _id, name, image, brand, category,
          gender, sale, percent, price,
          countInStock
        }
      )
    );
    const favoriteItems = yield select(store => store.favorite.favoriteItems);
    yield localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
    yield put(showAddAlert());
    yield delay(2000);
    yield put(hideAddAlert());
  } catch (error) {
    yield put(addToFavoriteFailure(error.message));
  }
}

export function* addProductToFavoriteWatcher(){
  yield takeLatest(ADD_PRODUCT_TO_FAVORITE_REQUEST, worker);
}
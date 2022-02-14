import {call, delay, put, select, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {addToCartFailure, addToCartSuccess, hideSuccessAddAlert, showSuccessAddAlert} from "../actions";
import {ADD_PRODUCT_TO_CART_REQUEST} from "../constans";

const addToCart = (id) => axios.get(`/api/products/${id}`);

function* worker({payload}){
  try {
    const {id, qty} = payload;
    const {data} = yield call(addToCart, id);
    const {_id, name, image, brand, category, gender, sale, percent, price, countInStock} = data;
    yield put(
      addToCartSuccess(
        {
          product: _id, name, image, brand, category,
          gender, sale, percent, price,
          countInStock, qty
        }
      )
    );
    const cartItems = yield select(store => store.cart.cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    yield put(showSuccessAddAlert());
    yield delay(2000);
    yield put(hideSuccessAddAlert());
  } catch (error) {
    yield put(addToCartFailure(error.message));
  }
}

export function* addProductToCardWatcher(){
  yield takeLatest(ADD_PRODUCT_TO_CART_REQUEST, worker);
}

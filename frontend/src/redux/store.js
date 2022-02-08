import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {productsApi} from "./Products/productsApi";
import rootSaga from "./rootSaga";

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const favoriteItemsFromStorage = localStorage.getItem('favoriteItems')
  ? JSON.parse(localStorage.getItem('favoriteItems'))
  : []

const userCredentials = localStorage.getItem('userCredentials')
  ? JSON.parse(localStorage.getItem('userCredentials'))
  : null

const shippingInformation = localStorage.getItem('shippingInformation')
  ? JSON.parse(localStorage.getItem('shippingInformation'))
  : null

const paymentInformation = localStorage.getItem('paymentInformation')
  ? JSON.parse(localStorage.getItem('paymentInformation'))
  : null

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage
  },
  login: {
    credentials: userCredentials
  },
  favorite: {
    favoriteItems: favoriteItemsFromStorage
  },
  order: {
    shipping: shippingInformation,
    payment: paymentInformation
  }
};

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi?.middleware, saga),
})

saga.run(rootSaga)

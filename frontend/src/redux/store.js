import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {productsApi} from "./Products/productsApi";
import rootSaga from "./rootSaga";

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage
  }
};

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi?.middleware, saga),
})

saga.run(rootSaga)

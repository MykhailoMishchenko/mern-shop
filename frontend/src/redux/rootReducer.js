import {combineReducers} from "redux";
import {productsApi} from "./Products/productsApi";
import {cartReducer} from "./Cart/reducer";


export const rootReducer = combineReducers({
  [productsApi?.reducerPath]: productsApi?.reducer,
  cart: cartReducer
})
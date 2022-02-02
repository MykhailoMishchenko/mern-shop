import {combineReducers} from "redux";
import {productsApi} from "./Products/productsApi";
import {cartReducer} from "./Cart/reducer";
import {changeMarkup} from "./Filter/Grid/reducer";
import {loginReducer} from "./Users/Login/reducer";


export const rootReducer = combineReducers({
  [productsApi?.reducerPath]: productsApi?.reducer,
  cart: cartReducer,
  markup: changeMarkup,
  login: loginReducer
})
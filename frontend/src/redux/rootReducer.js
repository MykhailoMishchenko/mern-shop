import {combineReducers} from "redux";
import {productsApi} from "./Products/productsApi";
import {cartReducer} from "./Cart/reducer";
import {changeMarkup} from "./Filter/Grid/reducer";
import {loginReducer} from "./Users/Login/reducer";
import {favoriteReducer} from "./Favorite/reducer";
import {registerReducer} from "./Users/Register/reducer";


export const rootReducer = combineReducers({
  [productsApi?.reducerPath]: productsApi?.reducer,
  cart: cartReducer,
  favorite: favoriteReducer,
  markup: changeMarkup,
  login: loginReducer,
  registration: registerReducer
})
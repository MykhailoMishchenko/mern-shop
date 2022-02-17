import {combineReducers} from "redux";
import {productsApi} from "./Products/productsApi";
import {cartReducer} from "./Cart/reducer";
import {changeMarkup} from "./Filter/Grid/reducer";
import {loginReducer} from "./Users/Login/reducer";
import {favoriteReducer} from "./Favorite/reducer";
import {registerReducer} from "./Users/Register/reducer";
import {userDetails} from "./Users/Details/reducer";
import {updateUserDetailsReducer} from "./Users/UpdateDetails/reducers";
import {addShippingInformation} from "./Order/CreateOrderLocal/reducer";
import {createOrderReducer} from "./Order/CreateOrderServer/reducer";
import {getMyOrdersReducer} from "./Order/MyOrders/reducer";
import {getOrderById} from "./Order/GetOrderById/getOrderById";


export const rootReducer = combineReducers({
  [productsApi?.reducerPath]: productsApi?.reducer,
  [getOrderById?.reducerPath]: getOrderById?.reducer,
  login: loginReducer,
  registration: registerReducer,
  profile: userDetails,
  updateProfile: updateUserDetailsReducer,
  cart: cartReducer,
  order: addShippingInformation,
  myOrders: getMyOrdersReducer,
  createOrder: createOrderReducer,
  favorite: favoriteReducer,
  markup: changeMarkup,
})
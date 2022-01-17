import {
  ADD_PRODUCT_TO_CART_FAILURE,
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS, HIDE_SUCCESS_ALERT_ADD,
  HIDE_SUCCESS_ALERT_REMOVE,
  REMOVE_PRODUCT_FROM_CART, SHOW_SUCCESS_ALERT_ADD,
  SHOW_SUCCESS_ALERT_REMOVE
} from "./constans";

const initialState = {
  loading: false,
  cartItems: [],
  error: null,
  addAlert: false,
  removeAlert: false
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_PRODUCT_TO_CART_SUCCESS:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          loading: false,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          )
        };
      } else {
        return {
          ...state,
          loading: false,
          cartItems: [...state.cartItems, item]
        };
      }
    case ADD_PRODUCT_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter(product => product._id !== action.payload)
      };
    case SHOW_SUCCESS_ALERT_ADD:
      return {
        ...state,
        addAlert: true
      }
    case HIDE_SUCCESS_ALERT_ADD:
      return {
        ...state,
        addAlert: false
      }
    case SHOW_SUCCESS_ALERT_REMOVE:
      return {
        ...state,
        removeAlert: true
      };
    case HIDE_SUCCESS_ALERT_REMOVE:
      return {
        ...state,
        removeAlert: false
      };
    default:
      return state;
  }
};
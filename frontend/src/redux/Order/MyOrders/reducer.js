import {GET_MY_ORDERS_FAILURE, GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS} from "./constans";

const initialState = {
  loading: false,
  myOrders: [],
  error: null
};

export const getMyOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_ORDERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_MY_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        myOrders: action.payload
      };
    case GET_MY_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        myOrders: [],
        error: action.payload
      };
    default:
      return state;
  }
};
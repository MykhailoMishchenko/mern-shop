import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_HIDE_ALERT,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SHOW_ALERT,
  CREATE_ORDER_SUCCESS
} from "./constans";

const initialState = {
  loading: false,
  order: null,
  error: null,
  showMyOrder: false
};

export const createOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload
      };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        order: null,
        error: action.payload
      };
    case CREATE_ORDER_SHOW_ALERT:
      return {
        ...state,
        showMyOrder: true
      };
    case CREATE_ORDER_HIDE_ALERT:
      return {
        ...state,
        showMyOrder: false
      };
    default:
      return state;
  }
};
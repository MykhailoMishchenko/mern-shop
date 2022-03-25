import {GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_REQUEST, GET_CUSTOMERS_SUCCESS} from "./Customers/constans";

const initialState = {
  loading: false,
  customers: [],
  error: null
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload
      };
    case GET_CUSTOMERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
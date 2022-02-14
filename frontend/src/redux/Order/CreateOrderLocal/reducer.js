import {ADD_PAYMENT_INFORMATION, ADD_SHIPPING_INFORMATION} from "./constans";

const initialState = {
  shipping: null,
  payment: null
};

export const addShippingInformation = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHIPPING_INFORMATION:
      return {
        ...state,
        shipping: action.payload
      };
    case ADD_PAYMENT_INFORMATION:
      return {
        ...state,
        payment: action.payload
      };
    default:
      return state;
  }
};
import {ADD_PAYMENT_INFORMATION, ADD_SHIPPING_INFORMATION} from "./constans";

export const addShippingInformation = (payload) => {
  localStorage.setItem("shippingInformation", JSON.stringify(payload));
  return {
    type: ADD_SHIPPING_INFORMATION,
    payload
  };
};

export const addPaymentInformation = (payload) => {
  localStorage.setItem("paymentInformation", JSON.stringify(payload));
  return {
    type: ADD_PAYMENT_INFORMATION,
    payload
  };
};
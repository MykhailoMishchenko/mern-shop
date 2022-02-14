import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_HIDE_ALERT,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SHOW_ALERT,
  CREATE_ORDER_SUCCESS
} from "./constans";

export const createOrder = (payload) => ({
  type: CREATE_ORDER_REQUEST,
  payload
});

export const createOrderSuccess = (payload) => ({
  type: CREATE_ORDER_SUCCESS,
  payload
});

export const createOrderFailure = (payload) => ({
  type: CREATE_ORDER_FAILURE,
  payload
});

export const createOrderShowAlert = () => ({
  type: CREATE_ORDER_SHOW_ALERT,
});

export const createOrderHideAlert = () => ({
  type: CREATE_ORDER_HIDE_ALERT,
});
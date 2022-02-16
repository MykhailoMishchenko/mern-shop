import {GET_MY_ORDERS_FAILURE, GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS} from "./constans";

export const getMyOrders = () => ({
  type: GET_MY_ORDERS_REQUEST
})

export const getMyOrdersSuccess = (payload) => ({
  type: GET_MY_ORDERS_SUCCESS,
  payload
})

export const getMyOrdersFailure = (payload) => ({
  type: GET_MY_ORDERS_FAILURE,
  payload
})
import {GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_REQUEST, GET_CUSTOMERS_SUCCESS} from "./constans";

export const getCustomers = () => ({
  type: GET_CUSTOMERS_REQUEST
});

export const getCustomersSuccess = (payload) => ({
  type: GET_CUSTOMERS_SUCCESS,
  payload
});

export const getCustomersFailure = (payload) => ({
  type: GET_CUSTOMERS_FAILURE,
  payload
});


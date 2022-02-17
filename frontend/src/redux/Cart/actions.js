import {
  ADD_PRODUCT_TO_CART_FAILURE,
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS, HIDE_SUCCESS_ALERT_ADD, HIDE_SUCCESS_ALERT_REMOVE, REMOVE_ALL_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART, REMOVE_PRODUCT_FROM_CART_REQUEST, SHOW_SUCCESS_ALERT_ADD, SHOW_SUCCESS_ALERT_REMOVE
} from "./constans";

export const addToCartRequest = (id, qty) => {
  return {
    type: ADD_PRODUCT_TO_CART_REQUEST,
    payload: {
      id, qty
    }
  }
}

export const addToCartSuccess = (payload) => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  payload
})

export const addToCartFailure = (payload) => ({
  type: ADD_PRODUCT_TO_CART_FAILURE,
  payload
})

export const removeFromCartRequest = (payload) => {
  return {
    type : REMOVE_PRODUCT_FROM_CART_REQUEST,
    payload
  }
}

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload
  }
}

export const removeAllFromCart = () => {
  return {
    type: REMOVE_ALL_PRODUCT_FROM_CART,
  }
}

//alert

export const showSuccessAddAlert = () => ({
  type: SHOW_SUCCESS_ALERT_ADD
})

export const hideSuccessAddAlert = () => ({
  type: HIDE_SUCCESS_ALERT_ADD
})

export const showSuccessRemoveAlert = () => ({
  type: SHOW_SUCCESS_ALERT_REMOVE
})

export const hideSuccessRemoveAlert = () => ({
  type: HIDE_SUCCESS_ALERT_REMOVE
})
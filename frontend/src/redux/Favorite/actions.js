import {
  ADD_PRODUCT_TO_FAVORITE_FAILURE,
  ADD_PRODUCT_TO_FAVORITE_REQUEST,
  ADD_PRODUCT_TO_FAVORITE_SUCCESS, HIDE_ALERT_ADD_TO_FAVORITE, HIDE_ALERT_REMOVE_FROM_FAVORITE,
  REMOVE_PRODUCT_FROM_FAVORITE,
  REMOVE_PRODUCT_FROM_FAVORITE_REQUEST,
  SHOW_ALERT_ADD_TO_FAVORITE, SHOW_ALERT_REMOVE_FROM_FAVORITE
} from "./constans";

export const addToFavoriteRequest = (id) => {
  return {
    type: ADD_PRODUCT_TO_FAVORITE_REQUEST,
    payload: {
      id
    }
  }
}

export const addToFavoriteSuccess = (payload) => ({
  type: ADD_PRODUCT_TO_FAVORITE_SUCCESS,
  payload
})

export const addToFavoriteFailure = (payload) => ({
  type: ADD_PRODUCT_TO_FAVORITE_FAILURE,
  payload
})

export const removeFromFavoriteRequest = (payload) => {
  return {
    type : REMOVE_PRODUCT_FROM_FAVORITE_REQUEST,
    payload
  }
}

export const removeFromFavorite = (payload) => {
  return {
    type: REMOVE_PRODUCT_FROM_FAVORITE,
    payload
  }
}

//alert

export const showAddAlert = () => ({
  type: SHOW_ALERT_ADD_TO_FAVORITE
})

export const hideAddAlert = () => ({
  type: HIDE_ALERT_ADD_TO_FAVORITE
})

export const showRemoveAlert = () => ({
  type: SHOW_ALERT_REMOVE_FROM_FAVORITE
})

export const hideRemoveAlert = () => ({
  type: HIDE_ALERT_REMOVE_FROM_FAVORITE
})
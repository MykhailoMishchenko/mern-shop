import {
  LOGIN_ERROR_ALERT_HIDE,
  LOGIN_ERROR_ALERT_SHOW,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS, LOGIN_SUCCESS_ALERT_HIDE,
  LOGIN_SUCCESS_ALERT_SHOW
} from "./constans";

export const login = (payload) => ({
  type: LOGIN_REQUEST,
  payload
});
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});
export const loginFail = (payload) => ({
  type: LOGIN_FAIL,
  payload
});


export const showError = () => ({
  type: LOGIN_ERROR_ALERT_SHOW
});
export const hideError = () => ({
  type: LOGIN_ERROR_ALERT_HIDE
});


export const showGreetings = () => ({
  type: LOGIN_SUCCESS_ALERT_SHOW
});
export const hideGreetings = () => ({
  type: LOGIN_SUCCESS_ALERT_HIDE
});

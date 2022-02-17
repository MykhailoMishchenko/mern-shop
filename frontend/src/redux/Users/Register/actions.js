import {HIDE_ERROR_REGISTER, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, SHOW_ERROR_REGISTER} from "./constans";

export const register = (payload) => ({
  type: REGISTER_REQUEST,
  payload
});
export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload
});
export const registerFail = (payload) => ({
  type: REGISTER_FAIL,
  payload
});

export const showErrorRegister = () => ({
  type: SHOW_ERROR_REGISTER
})

export const hideErrorRegister = () => ({
  type: HIDE_ERROR_REGISTER
})
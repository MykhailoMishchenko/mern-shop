import {REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS} from "./constans";

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
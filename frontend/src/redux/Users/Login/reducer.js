import {
  LOGIN_ERROR_ALERT_HIDE,
  LOGIN_ERROR_ALERT_SHOW,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS, LOGIN_SUCCESS_ALERT_HIDE,
  LOGIN_SUCCESS_ALERT_SHOW
} from "./constans";

const initialState = {
  loading: false,
  credentials: null,
  error: null,
  errorAlert: false,
  successAlert: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        credentials: null,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        credentials: action.payload,
        error: null
      };
    case LOGIN_FAIL:
      return {
        loading: false,
        credentials: null,
        error: action.payload
      };
    case LOGIN_ERROR_ALERT_SHOW:
      return {
        ...state,
        errorAlert: true
      };
    case LOGIN_ERROR_ALERT_HIDE:
      return {
        ...state,
        errorAlert: false
      }
    case LOGIN_SUCCESS_ALERT_SHOW:
      return {
        ...state,
        successAlert: true
      };
    case LOGIN_SUCCESS_ALERT_HIDE:
      return {
        ...state,
        successAlert: false
      };
    default:
      return state;
  }
};
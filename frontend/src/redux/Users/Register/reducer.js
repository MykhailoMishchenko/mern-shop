import {HIDE_ERROR_REGISTER, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, SHOW_ERROR_REGISTER} from "./constans";

const initialState = {
  loading: false,
  credentials: null,
  error: null,
  regErrAlert: false
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        loading: true,
        credentials: null,
        error: null
      };
    case REGISTER_SUCCESS:
      return {
        loading: false,
        credentials: action.payload,
        error: null
      };
    case REGISTER_FAIL:
      return {
        loading: false,
        credentials: null,
        error: action.payload
      };
    case SHOW_ERROR_REGISTER:
      return {
        ...state,
        regErrAlert: true
      }
    case HIDE_ERROR_REGISTER:
      return {
        ...state,
        regErrAlert: false
      }
    default:
      return state;
  }
};
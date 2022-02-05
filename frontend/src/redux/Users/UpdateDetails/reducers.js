import {
  HIDE_ALERT_UPDATE_USER_DETAILS_FAILURE,
  HIDE_ALERT_UPDATE_USER_DETAILS_SUCCESS, SHOW_ALERT_UPDATE_USER_DETAILS_FAILURE,
  SHOW_ALERT_UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
  UPDATE_USER_DETAILS_REQUEST
} from "./constans";

const initialState = {
  loading: false,
  error: null,
  successAlert: false,
  errorAlert: false
};

export const updateUserDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS_REQUEST:
      return {
        loading: true,
        error: null
      };
    case UPDATE_USER_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload
      };
    case SHOW_ALERT_UPDATE_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        error: null,
        successAlert: true,
        errorAlert: false
      };
    case HIDE_ALERT_UPDATE_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        error: null,
        successAlert: false,
        errorAlert: false
      };
    case SHOW_ALERT_UPDATE_USER_DETAILS_FAILURE:
      return {
        loading: false,
        error: null,
        successAlert: false,
        errorAlert: true
      }
    case HIDE_ALERT_UPDATE_USER_DETAILS_FAILURE:
      return {
        loading: false,
        error: null,
        successAlert: false,
        errorAlert: false
      }
    default:
      return state;
  }
};
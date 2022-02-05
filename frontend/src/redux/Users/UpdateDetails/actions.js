import {
  HIDE_ALERT_UPDATE_USER_DETAILS_FAILURE,
  HIDE_ALERT_UPDATE_USER_DETAILS_SUCCESS, SHOW_ALERT_UPDATE_USER_DETAILS_FAILURE,
  SHOW_ALERT_UPDATE_USER_DETAILS_SUCCESS, UPDATE_USER_DETAILS_FAILURE,
  UPDATE_USER_DETAILS_REQUEST
} from "./constans";

export const updateUserDetails = (payload) => ({
  type: UPDATE_USER_DETAILS_REQUEST,
  payload
});

export const updateUserDetailsFailure = (payload) => ({
  type: UPDATE_USER_DETAILS_FAILURE,
  payload
});

export const updateUserDetailsSuccessShowAlert = () => ({
  type: SHOW_ALERT_UPDATE_USER_DETAILS_SUCCESS
})
export const updateUserDetailsSuccessHideAlert = () => ({
  type: HIDE_ALERT_UPDATE_USER_DETAILS_SUCCESS
})

export const updateUserDetailsFailureShowAlert = () => ({
  type: SHOW_ALERT_UPDATE_USER_DETAILS_FAILURE,
});
export const updateUserDetailsFailureHideAlert = () => ({
  type: HIDE_ALERT_UPDATE_USER_DETAILS_FAILURE,
});
import {USER_DETAILS_FAILURE, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS} from "./constans";

export const getUserDetails = (payload) => ({
  type: USER_DETAILS_REQUEST,
  payload
});

export const getUserDetailsSuccess = (payload) => ({
  type: USER_DETAILS_SUCCESS,
  payload
});

export const getUserDetailsFailure = (payload) => ({
  type: USER_DETAILS_FAILURE,
  payload
});
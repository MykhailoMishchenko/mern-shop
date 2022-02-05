import {USER_LOGOUT, USER_LOGOUT_REQUEST} from "./constans";

export const logout = () => ({
  type: USER_LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
  type: USER_LOGOUT
});
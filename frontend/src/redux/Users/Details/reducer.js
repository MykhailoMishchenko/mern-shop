import {USER_DETAILS_FAILURE, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS} from "./constans";

const initialState = {
  loading: false,
  user: null,
  error: null
};

export const userDetails = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: null
      };
    case USER_DETAILS_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.payload
      };
    default:
      return state;
  }
};
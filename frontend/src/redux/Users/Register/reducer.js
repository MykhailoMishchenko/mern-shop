import {REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS} from "./constans";

const initialState = {
  loading: false,
  credentials: null,
  error: null
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
    default:
      return state;
  }
};
import {
  ADD_PRODUCT_TO_FAVORITE_FAILURE,
  ADD_PRODUCT_TO_FAVORITE_REQUEST,
  ADD_PRODUCT_TO_FAVORITE_SUCCESS,
  HIDE_ALERT_ADD_TO_FAVORITE, HIDE_ALERT_REMOVE_FROM_FAVORITE,
  REMOVE_PRODUCT_FROM_FAVORITE,
  SHOW_ALERT_ADD_TO_FAVORITE,
  SHOW_ALERT_REMOVE_FROM_FAVORITE
} from "./constans";

const initialState = {
  loading: false,
  favoriteItems: [],
  error: null,
  addAlert: false,
  removeAlert: false
};


export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_FAVORITE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_PRODUCT_TO_FAVORITE_SUCCESS:
      const item = action.payload;
      const existItem = state.favoriteItems.find((x) => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          loading: false,
          favoriteItems: state.favoriteItems.map((x) =>
            x._id === existItem._id ? item : x
          )
        };
      } else {
        return {
          ...state,
          loading: false,
          favoriteItems: [...state.favoriteItems, item]
        };
      }
    case ADD_PRODUCT_TO_FAVORITE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case REMOVE_PRODUCT_FROM_FAVORITE:
      return {
        ...state,
        loading: false,
        favoriteItems: state.favoriteItems.filter(product => product._id !== action.payload)
      };
    case SHOW_ALERT_ADD_TO_FAVORITE:
      return {
        ...state,
        addAlert: true
      }
    case HIDE_ALERT_ADD_TO_FAVORITE:
      return {
        ...state,
        addAlert: false
      }
    case SHOW_ALERT_REMOVE_FROM_FAVORITE:
      return {
        ...state,
        removeAlert: true
      };
    case HIDE_ALERT_REMOVE_FROM_FAVORITE:
      return {
        ...state,
        removeAlert: false
      };
    default:
      return state;
  }
};
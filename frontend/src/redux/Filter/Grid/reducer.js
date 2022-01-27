import {CHANGE_TO_GRID, CHANGE_TO_LINE} from "./constans";

const initialState = {
  isGrid: true
}
export const changeMarkup = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TO_LINE:
      return {
        isGrid: false
      }
    case CHANGE_TO_GRID:
      return {
        isGrid: true
      }
    default:
      return state
  }
}
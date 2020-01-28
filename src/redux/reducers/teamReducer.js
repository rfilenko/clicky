import {
  ADD_CLICK,
  CLEAR_CLICK,
  SET_TEAMNAME,
  NEW_TEAM,
  CLEAR_TEAMNAME,
  INITIAL_STATE
} from "../types";

export const teamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEAMNAME:
      return {
        ...state,
        name: action.payload
      };
    case NEW_TEAM:
      return {
        ...state,
        team: action.payload
      };
    case CLEAR_TEAMNAME:
      return {
        ...state,
        name: ""
      };
    case ADD_CLICK:
      return {
        ...state,
        clicks: state.clicks + action.payload
      };
    case CLEAR_CLICK:
      return {
        ...state,
        clicks: 0
      };

    default:
      return state;
  }
};

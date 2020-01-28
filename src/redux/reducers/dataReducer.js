import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "../types";

const INITIAL_STATE = {
  loading: true,
  teams: [],
  error: ""
};
const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: action.payload,
        error: ""
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        teams: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;

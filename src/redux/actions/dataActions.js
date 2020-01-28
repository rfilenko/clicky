import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "../types";

export const fetchTeamsRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};
export const fetchTeamsSuccess = teams => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: teams
  };
};
export const fetchTeamsFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const fetchTeams = () => dispatch => {
  dispatch(fetchTeamsRequest);

  axios
    .get("https://klikuj.herokuapp.com/api/v1/leaderboard")
    .then(response => {
      const data = response.data;
      dispatch(fetchTeamsSuccess(data));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchTeamsFailure(errorMsg));
    });
};

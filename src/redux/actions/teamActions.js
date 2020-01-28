import {
  SET_TEAMNAME,
  CLEAR_TEAMNAME,
  ADD_CLICK,
  CLEAR_CLICK,
  NEW_TEAM
} from "../types";

export const setTeamName = name => {
  return {
    type: SET_TEAMNAME,
    payload: name
  };
};

export const clearName = () => {
  return {
    type: CLEAR_TEAMNAME
  };
};

export const addClick = num => {
  return {
    type: ADD_CLICK,
    payload: num
  };
};

export const clearClick = () => {
  return {
    type: CLEAR_CLICK
  };
};

export const createTeam = teamData => dispatch => {
  fetch("https://klikuj.herokuapp.com/api/v1/leaderboard", {
    method: "POST",
    mode: "no-cors",
    body: {
      session: "123testa-load",
      team: JSON.stringify(teamData)
    }
  })
    .then(res => res.json())
    .then(team =>
      dispatch({
        type: NEW_TEAM,
        payload: team
      })
    );
};

import React from "react";
import { connect } from "react-redux";
import { persistor } from "../redux/store";
import { clearName, clearClick } from "../redux/actions/teamActions";

const ClearButtons = ({ handleClearNumber, handleClearName }) => {
  const clearTeamName = () => {
    handleClearName();

    persistor.purge();
    //redirect ro homepage
    window.location.href = "/";
  };

  return (
    <div className="clearWrap">
      <button className="btn orange clear" onClick={handleClearNumber}>
        clear number
      </button>
      <button className="btn orange clear " onClick={clearTeamName}>
        clear name
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.data.teams
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleClearNumber: () => dispatch(clearClick()),
    handleClearName: () => dispatch(clearName())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClearButtons);

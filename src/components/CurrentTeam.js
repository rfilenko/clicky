import React from "react";
import { connect } from "react-redux";
import { persistor } from "../redux/store";
import { addClick, createTeam } from "../redux/actions/teamActions";

import Table from "./Table";
import ClearButtons from "./ClearButtons";

function CurrentTeam(props) {
  const { team, handleClick, history, createTeam } = props;

  const handleButtonClick = e => {
    e.preventDefault();
    handleClick(1);
  };

  //clear redux storage
  const clearStorage = e => {
    e.preventDefault();
    persistor.purge();
    //redirect
    history.push(`/`);
  };
  const handleTeamUpdate = e => {
    e.preventDefault();
    const myCurrentTeam = {
      name: team.name,
      clicks: team.clicks
    };
    createTeam(myCurrentTeam);
  };

  return (
    <>
      <div className="w100">
        <h3>
          Clicking for team <strong>{team.name}</strong>
        </h3>
        <p>
          Too lazy to click? Let your pals click for you:{" "}
          <span>{window.location.href}</span>
        </p>
      </div>

      <main>
        <form className="team">
          <div className="">
            <button className="btn click" onClick={handleButtonClick}>
              click
            </button>
            <button className="btn orange" onClick={handleTeamUpdate}>
              Add to server
            </button>
            <button className="btn" onClick={clearStorage}>
              Clear storage
            </button>
          </div>
          <p>
            Team <span>{team.name}</span>
          </p>
          <div className="stats">
            <p>
              Your clicks <span>{team.clicks}</span>
            </p>
            <p>
              Team clicks <span>{team.clicks}</span>
            </p>
          </div>
        </form>
        <ClearButtons />
        <Table />

        <div className="bottom text">Want to be top? STFU and click</div>
      </main>
    </>
  );
}

const mapStateToProps = state => {
  return {
    team: state.team
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleClick: click => dispatch(addClick(click)),
    createTeam: team => dispatch(createTeam(team))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentTeam);

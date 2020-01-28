import React, { useState } from "react";
import { connect } from "react-redux";
import { setTeamName } from "../redux/actions/teamActions";

import Ribbon from "./Ribbon";
import Table from "./Table";

const Home = props => {
  const { history, setMyTeamName } = props;

  const [localName, setLocalName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleInput = () => {
    setMyTeamName(localName);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (localName.length === 0) {
      setIsVisible(true);
    }
    //update team value
    handleInput();

    //redirect to team's page
    const lowerTeam = localName.toLowerCase();
    history.push(`/${lowerTeam}`);
  };

  return (
    <>
      <blockquote>
        " It's really simple, you just need to click as fast as you can."
        <footer> - anonymous</footer>
      </blockquote>
      <main>
        {/* /form */}
        <form onSubmit={handleSubmit}>
          <div className="left">
            {!isVisible && (
              <label className="text" htmlFor="teamname">
                Enter your team name
              </label>
            )}
            <input
              id="teamname"
              type="text"
              onChange={e => setLocalName(e.target.value)}
              placeholder="your team name"
            />
          </div>
          <div className="right">
            <button className="btn" onClick={handleInput}>
              click
            </button>
          </div>
          {/* //erorr message */}
          {isVisible && (
            <div className="error">Please provide a team name !</div>
          )}
        </form>

        <Ribbon />

        <Table history={history} />

        <div className="bottom text">Want to be top? STFU and click</div>
      </main>
    </>
  );
};
const mapStateToProps = state => {
  return {
    team: state.team
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setMyTeamName: name => dispatch(setTeamName(name))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

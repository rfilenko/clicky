import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchTeams } from "../redux/actions/dataActions";

function Table(props) {
  const { fetchTeams, teams } = props;
  const [table, setTable] = useState([]);

  const handleData = e => {
    //top10 by clicks
    const filtered = teams
      .sort(function(a, b) {
        return b - a;
      })
      .slice(0, 10);
    setTable(filtered);
  };

  useEffect(() => {
    fetchTeams();
    handleData();
  }, []);
  return (
    <>
      <button className="btn" onClick={handleData}>
        show data
      </button>

      <table cellPadding="10">
        <thead>
          <tr>
            <th></th>
            <th>Team</th>
            <th>Click</th>
          </tr>
        </thead>
        <tbody>
          {table.length === 0 ? (
            <tr>
              <td></td>
              <td className="center">no data available</td>
              <td></td>
            </tr>
          ) : (
            table.map(item => {
              return (
                <tr key={item.order}>
                  <td>{item.order}</td>
                  <td>{item.team}</td>
                  <td>{item.clicks}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = state => {
  return {
    teams: state.data.teams
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: teams => dispatch(fetchTeams(teams))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);

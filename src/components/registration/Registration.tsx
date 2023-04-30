import React from "react";
import "./Registration.scss";

const Registration = () => {
  return (
    <div className="Registration">
      <div className="header">
        <h1>Robin-round - registration</h1>
      </div>
      <div className="top-panel">
        <button
          id="btn-add"
          className="btn btn-main"
          // onClick={ }
        >
          Add player
        </button>
      </div>
      <div className="main-panel">
        <table className="data-table">
          <thead>
            <tr className="data-table-header">
              <th className="data-table-header-cell">X</th>
              <th className="data-table-header-cell">First Name</th>
              <th className="data-table-header-cell">Last Name</th>
              <th className="data-table-header-cell">Rating</th>
              <th className="data-table-header-cell">Country</th>
              <th className="data-table-header-cell">Edit / Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr className="data-table-row">
              <td className="data-table-cell">1</td>
              <td className="data-table-cell">Magnus</td>
              <td className="data-table-cell">Carlsen</td>
              <td className="data-table-cell">2853</td>
              <td className="data-table-cell">Norway</td>
              <td className="data-table-cell">
                <div className="edit-remove">
                  <button className="btn btn-main">Edit</button>
                  <button className="btn btn-main">Remove</button>
                </div>
              </td>
            </tr>
            <tr className="data-table-row">
              <td className="data-table-cell">2</td>
              <td className="data-table-cell">Ian</td>
              <td className="data-table-cell">Nepomniachtchi</td>
              <td className="data-table-cell">2795</td>
              <td className="data-table-cell">Russia</td>
              <td className="data-table-cell">
                <div className="edit-remove">
                  <button className="btn btn-main">Edit</button>
                  <button className="btn btn-main">Remove</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bottom-panel">
        <button
          id="btn-create"
          className="btn btn-bottom"
          // onClick={ }
        >
          Create tournament
        </button>
      </div>
    </div>
  );
};

export default Registration;

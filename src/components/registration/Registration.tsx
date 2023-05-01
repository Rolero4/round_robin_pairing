import React from "react";
import "./Registration.scss";
import Header from "../header/Header";
import { Player, RegistrationTableColumns } from "../../utils/Helpers";
import TableRow from "./table-row/TableRow";
import { v4 as uuidv4 } from "uuid";

const players: Player[] = [
  {
    id: 1,
    firstName: "Magnus",
    lastName: "Carlsen",
    rating: 2853,
    country: "Norway",
  },
  {
    id: 2,
    firstName: "Ian",
    lastName: "Nepomniachtchi",
    rating: 2795,
    country: "Russia",
  },
];

const Registration = () => {
  const edit = (id: number): void => {};
  const remove = (id: number): void => {};

  return (
    <>
      <Header text={"Round-robin - registration"} />
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
              {RegistrationTableColumns.map(column => (
                <th className="data-table-header-cell" key={uuidv4()}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <TableRow
                player={player}
                edit={edit}
                remove={remove}
                key={uuidv4()}
              />
            ))}
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
    </>
  );
};

export default Registration;

import React from "react";
import { Player, ResultsTableColumnKeys } from "../../../../utils/Helpers";
import "./ResultsRow.scss";

interface ResultsRowProps {
  player: Player;
}

const ResultsRow = ({ player }: ResultsRowProps) => {
  return (
    <>
      <tr className="data-table-row">
        {" "}
        {/* docelowo użyć ResultsTableColumnKeys */}
        <td className="data-table-cell">{player.id}</td>
        <td className="data-table-cell">{player.country}</td>
        <td className="data-table-cell">
          {`${player.firstName} `}
          <span className="last-name-bold">{player.lastName}</span>
        </td>
        <td className="data-table-cell">{player.rating}</td>
        <td className="data-table-cell">{player.id === 1 ? "X" : "0.5 / 1"}</td>
        <td className="data-table-cell">{player.id === 2 ? "X" : "0.5 / 1"}</td>
        <td className="data-table-cell">{player.id === 3 ? "X" : "0.5 / 1"}</td>
        <td className="data-table-cell">1.5 / 2</td>
      </tr>
    </>
  );
};

export default ResultsRow;

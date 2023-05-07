import "./Results.scss";
import {
  Player,
  ResultsTableColumns,
  Tournament,
} from "../../../utils/Helpers";
import ResultsRow from "./results-row/ResultsRow";
import { v4 as uuidv4 } from "uuid";
import { useOutletContext } from "react-router-dom";

interface RouterOutletContext {
  players: Player[];
  tournament: Tournament;
}

const Results = () => {
  const { players, tournament } = useOutletContext<RouterOutletContext>();
  const columnsCount: number = players.filter(
    player => player.id !== -1,
  ).length;
  const indexArray: number[] = Array.from(
    { length: columnsCount },
    (_, i) => i + 1,
  );

  return (
    <>
      <div className="results-panel">
        <table className="data-table">
          <thead>
            <tr className="data-table-header">
              {ResultsTableColumns.map(column => (
                <th className="data-table-header-cell" key={uuidv4()}>
                  {column}
                </th>
              ))}
              {indexArray.map(column => (
                <th className="data-table-header-cell" key={uuidv4()}>
                  {column}
                </th>
              ))}
              <th className="data-table-header-cell" key={uuidv4()}>
                Pts
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <ResultsRow
                player={player}
                tournament={tournament}
                columnsCount={columnsCount}
                key={uuidv4()}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Results;

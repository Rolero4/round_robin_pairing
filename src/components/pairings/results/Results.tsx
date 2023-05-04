import "./Results.scss";
import { Player, ResultsTableColumns } from "../../../utils/Helpers";
import ResultsRow from "./results-row/ResultsRow";
import { v4 as uuidv4 } from "uuid";

const players: Player[] = [
  {
    id: 1,
    firstName: "Magnus",
    lastName: "Carlsen",
    country: "USA",
    rating: 1500,
  },
  {
    id: 2,
    firstName: "Hikaru",
    lastName: "Nakamura",
    country: "Canada",
    rating: 1600,
  },
  {
    id: 3,
    firstName: "Ian",
    lastName: "Nepomniachtchi",
    rating: 2795,
    country: "Russia",
  },
];

const Results = () => {
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
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <ResultsRow player={player} key={uuidv4()} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Results;

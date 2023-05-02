import "./Results.scss";
import { Player, ResultsTableColumns } from "../../../utils/Helpers";
import ResultsRow from "./results-row/ResultsRow";

const players = [
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
                <th className="data-table-header-cell">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <ResultsRow // TUTAJ ZMIENIC NA DANE DOCELOWE, TO TYLKO DO PODGLĄDU
                player={player}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Results;

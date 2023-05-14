import { useEffect, useState } from "react";
import { Game, Player, Round, Tournament } from "../../../../utils/Helpers";
import "./ResultsRow.scss";

interface ResultsRowProps {
  player: Player;
  tournament: Tournament;
  columnsCount: number;
}

const ResultsRow = ({ player, tournament, columnsCount }: ResultsRowProps) => {
  const [scoreColumns, setscoreColumns] = useState<JSX.Element[]>([]);
  const [score, setscore] = useState<number>(0);

  const prepareScoreColumns = (scores: (number | undefined)[]) => {
    const scoreColumns: JSX.Element[] = [];

    for (let i = 0; i < columnsCount; i++) {
      if (i + 1 !== player.id)
        scoreColumns.push(
          <td key={i} className="data-table-cell">
            {output(scores[i])}
          </td>,
        );
      else {
        scoreColumns.push(
          <td key={i} className="data-table-cell">
            -----
          </td>,
        );
      }
    }
    prepareScore(scores);
    setscoreColumns(scoreColumns);
  };

  const prepareScore = (scores: (number | undefined)[]) => {
    let finalScore = 0;

    scores.forEach((score: number | undefined) => {
      if (score !== undefined) finalScore += score;
    });

    setscore(finalScore);
  };

  const output = (obj1: number | undefined) => {
    return `${obj1 === undefined ? "" : obj1}`;
  };

  useEffect(() => {
    const scores: (number | undefined)[] = Array(columnsCount).fill(undefined);

    tournament.rounds.forEach((round: Round) => {
      round.games.forEach((game: Game) => {
        if (game.white.id !== -1 && game.black.id !== -1) {
          if (game.white.id === player.id) {
            scores[game.black.id - 1] = game.whiteScore;
          } else if (game.black.id === player.id) {
            scores[game.white.id - 1] = game.blackScore;
          }
        }
      });
    });

    prepareScoreColumns(scores);
    console.log(player);
  }, []);

  return (
    <>
      <tr className="data-table-row">
        {/* docelowo użyć ResultsTableColumnKeys */}
        <td className="data-table-cell">{player.id}</td>
        <td className="data-table-cell">
          {player.country === "" ? "-------" : player.country}
        </td>
        <td className="data-table-cell">
          <span className="last-name-bold">{player.lastName} </span>
          {`${player.firstName}`}
        </td>
        <td className="data-table-cell">{player.rating}</td>

        {scoreColumns}

        <td className="data-table-cell">
          {score}/{columnsCount - 1}
        </td>
      </tr>
    </>
  );
};

export default ResultsRow;

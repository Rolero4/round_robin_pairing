import { useEffect, useState } from "react";
import { Game, Player, Round, Tournament } from "../../../../utils/Helpers";
import "./ResultsRow.scss";

interface ResultsRowProps {
  player: Player;
  tournament: Tournament;
  columnsCount: number;
}

interface GameScore {
  white: number | undefined;
  black: number | undefined;
}

const ResultsRow = ({ player, tournament, columnsCount }: ResultsRowProps) => {
  const [scoreColumns, setscoreColumns] = useState<JSX.Element[]>([]);
  const [score, setscore] = useState<number>(0);

  const prepareScoreColumns = (scores: GameScore[]) => {
    const scoreColumns: JSX.Element[] = [];

    for (let i = 0; i < columnsCount; i++) {
      if (i + 1 !== player.id)
        scoreColumns.push(
          <td key={i} className="data-table-cell">
            {output(scores[i]?.white, scores[i]?.black)}
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

  const prepareScore = (scores: GameScore[]) => {
    let finalScore = 0;

    scores.forEach((score: GameScore) => {
      if (score.white !== undefined) finalScore += score.white;
      if (score.black !== undefined) finalScore += score.black;
    });

    setscore(finalScore);
  };

  const output = (obj1: number | undefined, obj2: number | undefined) => {
    return `${obj1 === undefined ? "-" : obj1} | ${
      obj2 === undefined ? "-" : obj2
    }`;
  };

  useEffect(() => {
    const scores: GameScore[] = Array(columnsCount).fill({
      white: undefined,
      black: undefined,
    });

    tournament.rounds.forEach((round: Round) => {
      round.games.forEach((game: Game) => {
        if (game.white.id !== -1 && game.black.id !== -1) {
          const blackIndex = game.black.id - 1;
          const whiteIndex = game.white.id - 1;
          if (game.white.id === player.id) {
            const gameScore = {
              white: game.whiteScore,
              black: scores[blackIndex].black,
            };
            scores[blackIndex] = gameScore;
          } else if (game.black.id === player.id) {
            const gameScore = {
              white: scores[whiteIndex].white,
              black: game.blackScore,
            };
            scores[whiteIndex] = gameScore;
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
          {score}/{(columnsCount - 1) * 2}
        </td>
      </tr>
    </>
  );
};

export default ResultsRow;

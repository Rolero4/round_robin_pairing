import "./Schedule.scss";
import ScheduleRow from "./schedule-row/ScheduleRow";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Player, Tournament } from "../../../utils/Helpers";

const Schedule = ({
  tournament,
  players,
}: {
  tournament: Tournament;
  players: Player[];
}) => {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);

  const handlePreviousRound = () => {
    if (currentRoundIndex > 0) {
      setCurrentRoundIndex(currentRoundIndex - 1);
    }
  };

  const handleNextRound = () => {
    if (currentRoundIndex < tournament.rounds.length - 1) {
      setCurrentRoundIndex(currentRoundIndex + 1);
    }
  };

  const currentRound = tournament.rounds[currentRoundIndex];
  // console.log(tournament);
  return (
    <>
      <div>
        {/* Display header with round number */}
        <h2>Round {currentRoundIndex + 1}</h2>
      </div>
      <div className="schedule-panel">
        {currentRound.games.map(game => (
          <ScheduleRow
            player1={game.white}
            player2={game.black}
            key={uuidv4()}
          />
        ))}
      </div>
      <div className="prev-next">
        <button
          id="btn-previous"
          className="btn btn-main"
          onClick={handlePreviousRound}
          title="Previous"
        >
          Previous
        </button>

        <button
          id="btn-next"
          className="btn btn-main"
          onClick={handleNextRound}
          title="Next"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Schedule;

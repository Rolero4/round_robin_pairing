import "./Schedule.scss";
import ScheduleRow from "./schedule-row/ScheduleRow";
import { v4 as uuidv4 } from "uuid";
import { Dispatch, SetStateAction, useState } from "react";
import { Player, Tournament } from "../../../utils/Helpers";

interface Props {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  tournament: Tournament;
  setTournament: Dispatch<SetStateAction<Tournament>>;
  updateLocalStorage: (key: string, value: object) => void;
}

const Schedule = ({ tournament, setTournament, updateLocalStorage }: Props) => {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);

  const handlePreviousRound = () => {
    setCurrentRoundIndex(currentRoundIndex - 1);
  };

  const handleNextRound = () => {
    setCurrentRoundIndex(currentRoundIndex + 1);
  };

  const currentRound = tournament.rounds[currentRoundIndex];
  return (
    <>
      <div>
        {/* Display header with round number */}
        <h2>Round {currentRoundIndex + 1}</h2>
      </div>
      <div className="schedule-panel">
        {currentRound?.games.map(game => (
          <ScheduleRow
            player1={game.white}
            player2={game.black}
            key={uuidv4()}
            isEditable={currentRound.isEditable}
          />
        ))}
      </div>
      <div className="prev-next">
        <button
          id="btn-previous"
          className="btn btn-main"
          onClick={handlePreviousRound}
          title="Previous"
          disabled={currentRoundIndex === 0}
        >
          Previous
        </button>

        <button
          id="btn-next"
          className="btn btn-main"
          onClick={handleNextRound}
          title="Next"
          disabled={currentRoundIndex === tournament.rounds.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Schedule;

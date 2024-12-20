import "./Schedule.scss";
import ScheduleRow from "./schedule-row/ScheduleRow";
import { v4 as uuidv4 } from "uuid";
import { Dispatch, SetStateAction } from "react";
import { Tournament } from "../../../utils/Helpers";

interface ScheduleProps {
  tournament: Tournament;
  setTournament: Dispatch<SetStateAction<Tournament>>;
  currentRoundIndex: number;
  setCurrentRoundIndex: Dispatch<SetStateAction<number>>;
  updateLocalStorage: (key: string, value: object) => void;
}

const Schedule = ({
  tournament,
  setTournament,
  currentRoundIndex,
  setCurrentRoundIndex,
  updateLocalStorage,
}: ScheduleProps) => {
  const handlePreviousRound = () => {
    setCurrentRoundIndex(prevCurrentRoundIndex => prevCurrentRoundIndex - 1);
  };

  const handleNextRound = () => {
    setCurrentRoundIndex(prevCurrentRoundIndex => prevCurrentRoundIndex + 1);
  };

  const handleCurrentRound = () => {
    setCurrentRoundIndex(tournament.currentRoundIndex);
  };

  const currentRound = tournament.rounds[currentRoundIndex];
  return (
    <>
      <h2 className="schedule-title">Round {currentRoundIndex + 1}</h2>
      <div className="schedule-panel">
        {currentRound?.games.map((game, gameIndex) => (
          <ScheduleRow
            tournament={tournament}
            setTournament={setTournament}
            updateLocalStorage={updateLocalStorage}
            game={game}
            gameIndex={gameIndex}
            isEditable={currentRound.isEditable}
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
          disabled={currentRoundIndex === 0}
        >
          Previous
        </button>

        <button
          id="btn-current"
          className="btn btn-bottom"
          onClick={handleCurrentRound}
          title="Current Round"
          disabled={currentRoundIndex === tournament.currentRoundIndex}
        >
          Current Round
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

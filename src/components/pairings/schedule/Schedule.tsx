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

  return (
    <>
      <div>{/* TODO: Display header with round number */}</div>
      <div className="schedule-panel">
        {players.map(player => (
          <ScheduleRow player1={player} player2={player} key={uuidv4()} />
        ))}
      </div>
      <div className="prev-next">
        <button
          id="btn-previous"
          className="btn btn-main"
          // onClick={ }
          title="Previous"
        >
          Previous
        </button>

        <button
          id="btn-next"
          className="btn btn-main"
          // onClick={ }
          title="Next"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Schedule;

import "./Schedule.scss";
import ScheduleRow from "./schedule-row/ScheduleRow";
import { Player } from "../../../utils/Helpers";
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
    firstName: "Jan",
    lastName: "Krzysztof-Duda",
    country: "Australia",
    rating: 1700,
  },
];

const Schedule = () => {
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

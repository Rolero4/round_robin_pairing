import "./Schedule.scss";
import ScheduleRow from "./schedule-row/ScheduleRow";
// import { Player } from "../../../utils/Helpers";

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
    firstName: "Jan",
    lastName: "Krzysztof-Duda",
    country: "Australia",
    rating: 1700,
  },
];

const Schedule = () => {
  return (
    <>
      <div className="schedule-panel">
        {players.map(player => (
          <ScheduleRow player1={player} player2={player} />
        ))}
      </div>
    </>
  );
};

export default Schedule;

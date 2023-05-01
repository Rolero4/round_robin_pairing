import React from "react";
import "./Schedule.scss";
import ScheduleRow from "./schedule-row/ScheduleRow";
// import { Player } from "../../../utils/Helpers";

const players = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    country: "USA",
    rating: 1500,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    country: "Canada",
    rating: 1600,
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Smith",
    country: "Australia",
    rating: 1700,
  },
];

const Schedule = () => {
  return (
    <>
      <div className="schedule-data">
        {players.map(player => (
          <ScheduleRow player1={player} player2={player} />
        ))}
      </div>
    </>
  );
};

export default Schedule;

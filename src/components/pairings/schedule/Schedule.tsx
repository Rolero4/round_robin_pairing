import React from "react";
import "./Schedule.scss";
import ScheduleRow from "./schedule-row/ScheduleRow";

const Schedule = () => {
  return (
    <>
      <div className="schedule-data">
        <ScheduleRow />
        <ScheduleRow />
        <ScheduleRow />
        <ScheduleRow />
        <ScheduleRow />
      </div>
    </>
  );
};

export default Schedule;

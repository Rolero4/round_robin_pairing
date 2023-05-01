import "./Pairings.scss";
import Results from "./results/Results";
import Schedule from "./schedule/Schedule";
import Header from "../header/Header";

const Pairings = () => {
  return (
    <>
      <Header text={"Round-robin - pairings"} />
      <Schedule />
    </>
  );
};

export default Pairings;

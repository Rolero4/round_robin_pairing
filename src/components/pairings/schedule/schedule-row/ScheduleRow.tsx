import { Player } from "../../../../utils/Helpers";
import whiteIcon from "../../../../assets/crown-white.png";
import blackIcon from "../../../../assets/crown-black.png";
import drawIcon from "../../../../assets/crown-draw.png";
import "./ScheduleRow.scss";
import { useState } from "react";

interface ScheduleRowProps {
  player1: Player;
  player2?: Player;
}

const ScheduleRow = ({ player1, player2 }: ScheduleRowProps) => {
  const [result, setResult] = useState({ first: 0, second: 0 });

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "white") {
      setResult({ first: 1, second: 0 });
    } else if (value === "draw") {
      setResult({ first: 0.5, second: 0.5 });
    } else if (value === "black") {
      setResult({ first: 0, second: 1 });
    }
  };

  return (
    <>
      <div className="schedule-row">
        <div className="first-player">
          <img className="radio-icon" src={whiteIcon} alt="white" />
          <div className="player-data">
            <span className="name">{`${player1.firstName} ${player1.lastName}`}</span>
            <div className="player-rating-country">
              <span className="rating">{`${player1.rating}`}</span>
              <span className="country">{`${player1.country}`}</span>
            </div>
          </div>
        </div>

        <div className="result">
          <div className="result-text">
            <span className="res-first-player">{result.first}</span>
            <div className="divider"></div>
            <span className="res-second-player">{result.second}</span>
          </div>

          <div className="radio-container">
            <form>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="white"
                  onChange={handleRadioChange}
                />
                <span>
                  <img className="radio-icon" src={whiteIcon} alt="white" />
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="draw"
                  onChange={handleRadioChange}
                />
                <span>
                  <img className="radio-icon" src={drawIcon} alt="draw" />
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="black"
                  onChange={handleRadioChange}
                />
                <span>
                  <img className="radio-icon" src={blackIcon} alt="black" />
                </span>
              </label>
            </form>
          </div>
        </div>

        <div className="second-player">
          <div className="player-data">
            <span className="name">{`${
              player2 ? `${player2.firstName} ${player2.lastName}` : ""
            }`}</span>
            <div className="player-rating-country">
              <span className="rating">{`${
                player2 ? `${player2.rating}` : ""
              }`}</span>
              <span className="country">{`${
                player2 ? `${player2.country}` : ""
              }`}</span>
            </div>
          </div>
          <img className="radio-icon" src={blackIcon} alt="white" />
        </div>
      </div>
    </>
  );
};

export default ScheduleRow;

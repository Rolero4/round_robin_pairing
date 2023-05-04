import { Player } from "../../../../utils/Helpers";
import whiteIcon from "../../../../assets/crown-white.png";
import blackIcon from "../../../../assets/crown-black.png";
import drawIcon from "../../../../assets/crown-draw.png";
import "./ScheduleRow.scss";

interface ScheduleRowProps {
  player1: Player;
  player2: Player;
}

const ScheduleRow = ({ player1, player2 }: ScheduleRowProps) => {
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
            <span className="res-first-player">1</span>
            <div className="divider"></div>
            <span className="res-second-player">0</span>
          </div>

          <div className="radio-container">
            <form>
              <label>
                <input type="radio" name="radio" />
                <span>
                  <img className="radio-icon" src={whiteIcon} alt="white" />
                </span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>
                  <img className="radio-icon" src={drawIcon} alt="white" />
                </span>
              </label>
              <label>
                <input type="radio" name="radio" />
                <span>
                  <img className="radio-icon" src={blackIcon} alt="white" />
                </span>
              </label>
            </form>
          </div>
        </div>

        <div className="second-player">
          <div className="player-data">
            <span className="name">{`${player2.firstName} ${player2.lastName}`}</span>
            <div className="player-rating-country">
              <span className="rating">{`${player2.rating}`}</span>
              <span className="country">{`${player2.country}`}</span>
            </div>
          </div>
          <img className="radio-icon" src={blackIcon} alt="white" />
        </div>
      </div>
    </>
  );
};

export default ScheduleRow;

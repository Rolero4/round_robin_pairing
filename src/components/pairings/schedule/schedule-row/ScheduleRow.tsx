import { Game, Tournament } from "../../../../utils/Helpers";
import whiteIcon from "../../../../assets/crown-white.png";
import blackIcon from "../../../../assets/crown-black.png";
import drawIcon from "../../../../assets/crown-draw.png";
import "./ScheduleRow.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ScheduleRowProps {
  tournament: Tournament;
  setTournament: Dispatch<SetStateAction<Tournament>>;
  game: Game;
  gameIndex: number;
  isEditable: boolean;
  updateLocalStorage: (key: string, value: object) => void;
}

const ScheduleRow = ({
  tournament,
  setTournament,
  updateLocalStorage,
  game,
  gameIndex,
  isEditable,
}: ScheduleRowProps) => {
  const [additionalClass, setadditionalClass] = useState('')
  const { white, black } = game;
  const { whiteScore, blackScore } =
    tournament.rounds[game.round].games[gameIndex];

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(game.black?.id === -1 || game.white.id === -1)
      return
    const value = event.target.value;
    if (value === "white") {
      updateGameScore({ first: 1, second: 0 });
    } else if (value === "draw") {
      updateGameScore({ first: 0.5, second: 0.5 });
    } else if (value === "black") {
      updateGameScore({ first: 0, second: 1 });
    }
  };

  const updateGameScore = ({
    first,
    second,
  }: {
    first: number;
    second: number;
  }) => {
    setTournament(prevTournament => {
      const newTournament = { ...prevTournament };
      newTournament.rounds[prevTournament.currentRoundIndex].games[
        gameIndex
      ].whiteScore = first;
      newTournament.rounds[prevTournament.currentRoundIndex].games[
        gameIndex
      ].blackScore = second;
      updateLocalStorage("tournament", newTournament);
      return newTournament;
    });
  };

  useEffect(()=>{
    if(game.black?.id === -1 || game.white.id === -1){
      setadditionalClass('schedule-row-bye')
    } else if (game.blackScore! > game.whiteScore!){
      setadditionalClass('schedule-row-black')
    } else if(game.blackScore!< game.whiteScore!){
      setadditionalClass('schedule-row-white')
    } else if(game.blackScore === 0.5){
      setadditionalClass('schedule-row-draw')
    }
  }, [])


  return (
    <>
      <div className={`schedule-row ${additionalClass}`}>
        <div className="first-player">
          <img className="radio-icon" src={whiteIcon} alt="white" />
          <div className="player-data">
            <span className="name">{`${white.firstName} ${white.lastName}`}</span>
            <div className="player-rating-country">
              <span className="rating">{`${white.rating}`}</span>
              <span className="country">{`${white.country}`}</span>
            </div>
          </div>
        </div>

        <div className="result">
          <div className="result-text">
            <span className="res-first-player">{whiteScore ?? 0}</span>
            <div className="divider"></div>
            <span className="res-second-player">{blackScore ?? 0}</span>
          </div>

          {isEditable && (
            <div className="radio-container">
              <form>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="white"
                    checked={whiteScore === 1 && blackScore === 0}
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
                    checked={whiteScore === 0.5 && blackScore === 0.5}
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
                    checked={whiteScore === 0 && blackScore === 1}
                    onChange={handleRadioChange}
                  />
                  <span>
                    <img className="radio-icon" src={blackIcon} alt="black" />
                  </span>
                </label>
              </form>
            </div>
          )}
        </div>

        <div className="second-player">
          <div className="player-data">
            <span className="name">{`${
              black ? `${black.firstName} ${black.lastName}` : ""
            }`}</span>
            <div className="player-rating-country">
              <span className="rating">{`${
                black ? `${black.rating}` : ""
              }`}</span>
              <span className="country">{`${
                black ? `${black.country}` : ""
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

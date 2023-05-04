import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Root.scss";
import { Player, Round, Tournament } from "../../utils/Helpers";

const Root = () => {
  const [tournament, setTournament] = useState<Tournament>({
    rounds: [] as Round[],
    isFinished: false,
    currentRoundIndex: 0,
  });
  const [players, setPlayers] = useState<Player[]>([]);

  const updateLocalStorage = (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return (
    <>
      <main className="main-content">
        <Outlet
          context={{
            tournament,
            setTournament,
            players,
            setPlayers,
            updateLocalStorage,
          }}
        />
      </main>
    </>
  );
};

export default Root;

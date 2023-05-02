import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./Root.scss";
import { Player, Round, Tournament } from "../../utils/Helpers";

const staticPlayers: Player[] = [
  {
    id: 1,
    firstName: "Magnus",
    lastName: "Carlsen",
    rating: 2853,
    country: "Norway",
  },
  {
    id: 2,
    firstName: "Ian",
    lastName: "Nepomniachtchi",
    rating: 2795,
    country: "Russia",
  },
];

const Root = () => {
  const [tournament, setTournament] = useState<Tournament>({
    rounds: [] as Round[],
    isFinished: false,
  });
  const [players, setPlayers] = useState<Player[]>(staticPlayers);

  useEffect(() => {
    updateLocalStorage("players", players);
  }, [players]);

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

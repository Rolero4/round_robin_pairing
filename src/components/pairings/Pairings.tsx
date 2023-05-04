import "./Pairings.scss";
import Results from "./results/Results";
import Schedule from "./schedule/Schedule";
import Header from "../header/Header";
import { Player, TabNames, Tournament } from "../../utils/Helpers";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Pairings = () => {
  interface RouterOutletContext {
    players: Player[];
    setPlayers: Dispatch<SetStateAction<Player[]>>;
    tournament: Tournament;
    setTournament: Dispatch<SetStateAction<Tournament>>;
    updateLocalStorage: (key: string, value: object) => void;
  }

  const { players, setPlayers, tournament, setTournament, updateLocalStorage } =
    useOutletContext<RouterOutletContext>();

  const [activeTab, setActiveTab] = useState<TabNames>(TabNames.Results);

  useEffect(() => {
    const localStoragePlayers = localStorage.getItem("players");
    if (localStoragePlayers) {
      setPlayers(JSON.parse(localStoragePlayers));
    } else {
      updateLocalStorage("players", players);
    }

    const localStorageTournament = localStorage.getItem("tournament");
    if (localStorageTournament) {
      setTournament(JSON.parse(localStorageTournament));
    } else if (tournament.rounds?.length) {
      updateLocalStorage("tournament", tournament);
    } else {
      navigate("/");
    }
  }, []);

  const navigate = useNavigate();

  const onCancelTournament = () => {
    // TODO: implement functionality
    // remember to add confirmation modal
  };

  const handleTabClick = (tab: TabNames) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header text={"Round-robin - pairings"} />
      <div className="pairings-top-panel">
        <div
          className={activeTab === TabNames.Results ? "tab tab-active" : "tab"}
          onClick={() => handleTabClick(TabNames.Results)}
        >
          Pairings
        </div>
        <div
          className={activeTab === TabNames.Schedule ? "tab tab-active" : "tab"}
          onClick={() => handleTabClick(TabNames.Schedule)}
        >
          Schedule
        </div>
      </div>
      <div className="pairings-main-panel">
        {activeTab === TabNames.Results && <Results />}
        {activeTab === TabNames.Schedule && <Schedule />}
      </div>
      <div className="pairings-bottom-panel">
        <button
          id="btn-cancel"
          className="btn btn-warning"
          onClick={onCancelTournament}
          title="Cancel tournament"
        >
          Cancel tournament
        </button>
      </div>
    </>
  );
};

export default Pairings;

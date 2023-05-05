import "./Pairings.scss";
import Results from "./results/Results";
import Schedule from "./schedule/Schedule";
import Header from "../header/Header";
import {
  Player,
  Round,
  TabNames,
  Tournament,
  capitalizeFirstLetter,
} from "../../utils/Helpers";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import ConfirmationModal from "./confirmation-modal/ConfirmationModal";

interface RouterOutletContext {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  tournament: Tournament;
  setTournament: Dispatch<SetStateAction<Tournament>>;
  updateLocalStorage: (key: string, value: object) => void;
}

const Pairings = () => {
  const { players, setPlayers, tournament, setTournament, updateLocalStorage } =
    useOutletContext<RouterOutletContext>();

  const [activeTab, setActiveTab] = useState<TabNames>(TabNames.Schedule);
  const [isCancelTournamentModalOpen, setIsCancelTournamentModalOpen] =
    useState(false);

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
    localStorage.removeItem("tournament");
    setTournament({
      rounds: [] as Round[],
      isFinished: false,
      currentRoundIndex: 0,
    });
    navigate("/");
  };

  const handleTabClick = (tab: TabNames) => {
    setActiveTab(tab);
  };

  return (
    <>
      {isCancelTournamentModalOpen && (
        <ConfirmationModal
          onClose={() => setIsCancelTournamentModalOpen(false)}
          onCancelTournament={onCancelTournament}
        ></ConfirmationModal>
      )}
      <Header text={"Round-robin - pairings"} />
      <div className="pairings-top-panel">
        <div
          className={activeTab === TabNames.Schedule ? "tab tab-active" : "tab"}
          onClick={() => handleTabClick(TabNames.Schedule)}
        >
          {capitalizeFirstLetter(TabNames.Schedule)}
        </div>
        <div
          className={activeTab === TabNames.Results ? "tab tab-active" : "tab"}
          onClick={() => handleTabClick(TabNames.Results)}
        >
          {capitalizeFirstLetter(TabNames.Results)}
        </div>
      </div>
      <div className="pairings-main-panel">
        {activeTab === TabNames.Results && <Results />}
        {activeTab === TabNames.Schedule && (
          <Schedule tournament={tournament} players={players} />
        )}
      </div>

      <div className="pairings-bottom-panel">
        <button
          id="btn-cancel"
          className="btn btn-warning"
          onClick={() => setIsCancelTournamentModalOpen(true)}
          title="Cancel tournament"
        >
          Cancel tournament
        </button>
      </div>
    </>
  );
};

export default Pairings;

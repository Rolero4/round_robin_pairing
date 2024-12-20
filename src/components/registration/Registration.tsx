import { useState, useEffect, Dispatch, SetStateAction } from "react";
import "./Registration.scss";
import Header from "../header/Header";
import {
  Player,
  RegistrationTableColumns,
  Tournament,
} from "../../utils/Helpers";
import TableRow from "./table-row/TableRow";
import { v4 as uuidv4 } from "uuid";
import PlayerModal from "./player-modal/PlayerModal";
import { useNavigate, useOutletContext } from "react-router-dom";
import { roundRobin } from "../../utils/TournamentCreator";

interface RouterOutletContext {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  tournament: Tournament;
  setTournament: Dispatch<SetStateAction<Tournament>>;
  updateLocalStorage: (key: string, value: object) => void;
}

const Registration = () => {
  const { players, setPlayers, setTournament, updateLocalStorage } =
    useOutletContext<RouterOutletContext>();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [playerToEdit, setPlayerToEdit] = useState<Player | undefined>(
    undefined,
  );

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
      navigate("/pairings");
    }
  }, []);

  const navigate = useNavigate();

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };
  const addNewPlayer = (player: Player) => {
    setPlayers((prevPlayers: Player[]) => {
      const newPlayers = [
        ...prevPlayers,
        { ...player, id: prevPlayers.length + 1 },
      ];
      updateLocalStorage("players", newPlayers);
      return newPlayers;
    });
  };

  const handleOpenEditModal = (id: number) => {
    setPlayerToEdit(players.find((p: Player) => p.id === id));
    setIsEditModalOpen(true);
  };
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };
  const saveEditedPlayer = (player: Player) => {
    setPlayers((prevPlayers: Player[]) => {
      const newPlayers = prevPlayers.map(p =>
        p.id === player.id ? player : p,
      );
      updateLocalStorage("players", newPlayers);
      return newPlayers;
    });
  };

  const edit = (id: number): void => {
    handleOpenEditModal(id);
  };
  const remove = (id: number): void => {
    setPlayers((prevPlayers: Player[]) => {
      const newPlayers = prevPlayers
        .filter(p => p.id !== id)
        .map((p, i) => ({ ...p, id: i + 1 }));
      updateLocalStorage("players", newPlayers);
      return newPlayers;
    });
  };

  const onCreateTournament = (): void => {
    const tourney: Tournament = roundRobin(players);
    console.log(tourney);
    setTournament(tourney);
    updateLocalStorage("tournament", tourney);
    navigate("/pairings");
  };

  return (
    <>
      {isAddModalOpen && (
        <PlayerModal
          onClose={handleCloseAddModal}
          savePlayer={addNewPlayer}
          playerToEdit={undefined}
        />
      )}
      {isEditModalOpen && (
        <PlayerModal
          onClose={handleCloseEditModal}
          savePlayer={saveEditedPlayer}
          playerToEdit={playerToEdit}
        />
      )}
      <Header text={"Round-robin - registration"} />
      <div className="registration-top-panel">
        <button
          id="btn-add"
          className="btn btn-main"
          onClick={handleOpenAddModal}
          disabled={players.length === 16}
          title={
            players.length === 16
              ? "Maximum number of players reached"
              : "Add new player"
          }
        >
          Add player
        </button>
      </div>
      <div className="registration-main-panel">
        <table className="data-table">
          <thead>
            <tr className="data-table-header">
              {RegistrationTableColumns.map(column => (
                <th className="data-table-header-cell" key={uuidv4()}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map((player: Player) => (
              <TableRow
                player={player}
                edit={edit}
                remove={remove}
                key={uuidv4()}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="registration-bottom-panel">
        <button
          id="btn-create"
          className="btn btn-bottom"
          onClick={onCreateTournament}
          disabled={players.length < 3}
          title={players.length < 3 ? "Not enough players" : "Create pairings"}
        >
          Create tournament
        </button>
      </div>
    </>
  );
};

export default Registration;

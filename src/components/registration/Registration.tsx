import { useState, useEffect, Dispatch, SetStateAction } from "react";
import "./Registration.scss";
import Header from "../header/Header";
import { Player, RegistrationTableColumns } from "../../utils/Helpers";
import TableRow from "./table-row/TableRow";
import { v4 as uuidv4 } from "uuid";
import PlayerModal from "./player-modal/PlayerModal";
import { useNavigate, useOutletContext } from "react-router-dom";

interface RouterOutletContext {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  updateLocalStorage: (key: string, value: object) => void;
}

const Registration = () => {
  const { players, setPlayers, updateLocalStorage } =
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
    setPlayerToEdit(players.find(p => p.id === id));
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
      <div className="top-panel">
        <button
          id="btn-add"
          className="btn btn-main"
          onClick={handleOpenAddModal}
          disabled={players.length === 10}
          title={
            players.length === 10
              ? "Maximum number of players reached"
              : "Add new player"
          }
        >
          Add player
        </button>
      </div>
      <div className="main-panel">
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
            {players.map(player => (
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
      <div className="bottom-panel">
        <button
          id="btn-create"
          className="btn btn-bottom"
          onClick={() => navigate("/pairings")}
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

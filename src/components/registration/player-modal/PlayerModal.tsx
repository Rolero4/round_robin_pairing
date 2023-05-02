import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { Player } from "../../../utils/Helpers";
import "./PlayerModal.scss";

const PlayerModal = ({
  onClose,
  savePlayer,
  playerToEdit,
}: {
  onClose: () => void;
  savePlayer: (playerData: Player) => void;
  playerToEdit: Player | undefined;
}) => {
  const [playerData, setPlayerData] = useState<Player>({
    id: 0,
    firstName: "",
    lastName: "",
    country: "",
    rating: 0,
  });
  const [requiredFieldsFilled, setRequiredFieldsFilled] = useState(false);

  useEffect(() => {
    if (playerToEdit) {
      setPlayerData(playerToEdit);
    }
  }, [playerToEdit]);

  useEffect(() => {
    if (playerData.firstName && playerData.lastName) {
      setRequiredFieldsFilled(true);
    } else {
      setRequiredFieldsFilled(false);
    }
  }, [playerData.firstName, playerData.lastName]);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPlayerData(prevUserData => ({
      ...prevUserData,
      firstName: event.target.value,
    }));
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerData(prevUserData => ({
      ...prevUserData,
      lastName: event.target.value,
    }));
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerData(prevUserData => ({
      ...prevUserData,
      country: event.target.value,
    }));
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerData(prevUserData => ({
      ...prevUserData,
      rating: Number(event.target.value),
    }));
  };

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    handleClose();
    savePlayer(playerData);
  };

  return (
    <Modal open={true} onClose={handleClose} className="player-modal">
      <div className="modal-content">
        <TextField
          label="First Name"
          value={playerData.firstName}
          onChange={handleFirstNameChange}
          required
        />
        <TextField
          label="Last Name"
          value={playerData.lastName}
          onChange={handleLastNameChange}
          required
        />
        <TextField
          label="Country"
          value={playerData.country}
          onChange={handleCountryChange}
        />
        <TextField
          label="Rating"
          type="number"
          value={playerData.rating}
          onChange={handleRatingChange}
        />
        <button
          className="btn btn-main"
          onClick={handleSubmit}
          disabled={!requiredFieldsFilled}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default PlayerModal;

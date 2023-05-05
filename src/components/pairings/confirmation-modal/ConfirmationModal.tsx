import { Modal } from "@material-ui/core";
import "./ConfirmationModal.scss";

interface Props {
  onClose: () => void;
  onCancelTournament: () => void;
}

const ConfirmationModal = ({ onClose, onCancelTournament }: Props) => {
  return (
    <Modal open={true} onClose={onClose} className="confirmation-modal">
      <div className="modal-content">
        <h2>Are you sure you want to cancel the tournament?</h2>
        <div className="buttons-container">
          <button className="btn btn-warning" onClick={onCancelTournament}>
            Yes
          </button>
          <button className="btn btn-bottom" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

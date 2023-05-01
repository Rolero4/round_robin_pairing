import { Player, RegistrationTableColumnKeys } from "../../../utils/Helpers";
import "./TableRow.scss";

interface TableRowProps {
  player: Player;
  edit: (id: number) => void;
  remove: (id: number) => void;
}

const TableRow = ({ player, edit, remove }: TableRowProps) => {
  return (
    <tr className="data-table-row">
      {RegistrationTableColumnKeys.map(key => {
        return (
          <td className="data-table-cell" key={key}>
            {player[key as keyof Player]}
          </td>
        );
      })}
      <td className="data-table-cell">
        <div className="edit-remove">
          <button className="btn btn-main" onClick={() => edit(player.id)}>
            Edit
          </button>
          <button className="btn btn-main" onClick={() => remove(player.id)}>
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;

import { IProviderGroup } from "../../../utils/interfaces";
import Group from "../Groups/Groups";
import "../TableItem/TableItem.scss";

interface ITableItemProps {
  groups: IProviderGroup[];
}

const TableItem = ({ groups }: ITableItemProps) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr className="table-id">
            <th>ID</th>
          </tr>
          <tr className="table-stream">
            <th>Stream</th>
          </tr>
          <tr className="table-lastEvent">
            <th>Last event</th>
          </tr>
        </thead>
        <tbody>
          {[
            ...groups.map((group: IProviderGroup) => {
              return <Group group={group} />;
            })
          ]}
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;

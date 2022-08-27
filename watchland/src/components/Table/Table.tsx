import { Link } from "react-router-dom";
import { IProviderGroup } from "../../utils/interfaces";
// import Group from "../Groups/Groups";
import "./Table.scss";

interface ITableProps {
  groups: IProviderGroup[];
  type: string;
  details: boolean;
}

const Table = ({ groups, type, details }: ITableProps) => {
  return (
    <div className="table">
      <table>
        <thead>
          {details
            ? [
                <tr className="table-id">
                  <th>Timestamp</th>
                </tr>,
                <tr className="table-stream">
                  <th>Message</th>
                </tr>
              ]
            : [
                <tr className="table-id">
                  <th>Log stream</th>
                </tr>,
                <tr className="table-lastEvent">
                  <th>Last event</th>
                </tr>
              ]}
        </thead>
        <tbody>
          {[
            ...groups.map((group: IProviderGroup) => {
              return (
                <tr className="group" key={group.id}>
                  <td className="group-id">{group.id}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/${type}/${group.id}`
                      }}
                      className="group-stream"
                    >
                      {group.stream}
                    </Link>
                  </td>
                </tr>
              );
              // return <Group group={group} />;
            })
          ]}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

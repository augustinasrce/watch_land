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
    <div className="container">
      <table className="table">
        <thead>
          {details
            ? [
                <tr>
                  <th scope="col">Timestamp</th>
                  <th scope="col">Message</th>
                </tr>
              ]
            : [
                <tr>
                  <th scope="col">Log Group</th>
                  <th scope="col">Creation time</th>
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

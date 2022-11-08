import * as uuid from "uuid";
import { ITableCell } from "../spec";
import TableRow from "./TableRow";
import "./Table.scss";

interface ITableProps {
  headers: string[];
  body: ITableCell[][];
}

const Table = ({ headers, body }: ITableProps) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            {[
              ...headers.map((header: string) => {
                return (
                  <th scope="col" key={uuid.v4()}>
                    {header}
                  </th>
                );
              })
            ]}
          </tr>
        </thead>
        <tbody>
          {[
            ...body.map((cells: ITableCell[]) => {
              return <TableRow cells={cells} />;
            })
          ]}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

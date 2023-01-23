import * as uuid from "uuid";
import { ITableCell } from "../spec";
import TableRow from "./TableRow";
import "./Table.scss";

interface ITableProps {
  headers: string[];
  body: ITableCell[][];
  openable?: Boolean;
}

const Table = ({ headers, body, openable = false }: ITableProps) => {
  return (
    <div className="container pb-5">
      <table className="table table-bordered">
        <thead className="thead-dark">
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
              return <TableRow cells={cells} openable={openable} key={uuid.v4()} />;
            })
          ]}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

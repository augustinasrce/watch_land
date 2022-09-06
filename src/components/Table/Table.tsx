import { Link } from "react-router-dom";
import { ITableCell } from "../spec";
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
                return <th scope="col">{header}</th>;
              })
            ]}
          </tr>
        </thead>
        <tbody>
          {[
            ...body.map((cells: ITableCell[]) => {
              return (
                <tr>
                  {[
                    ...cells.map((cell: ITableCell) => {
                      return (
                        <td>
                          {cell.isLink ? (
                            <Link to={{ pathname: cell.link }}>{cell.message}</Link>
                          ) : (
                            cell.message
                          )}
                        </td>
                      );
                    })
                  ]}
                </tr>
              );
            })
          ]}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

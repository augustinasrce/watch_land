import * as uuid from "uuid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ITableCell } from "../spec";

interface ITableRow {
  cells: ITableCell[];
  openable: Boolean;
}

const TableRow = ({ cells, openable }: ITableRow) => {
  const [open, setOpen] = useState<Boolean>(false);

  const toggle = () => {
    setOpen(openable && !open);
  };
  return (
    <>
      <tr>
        {[
          ...cells.map((cell: ITableCell) => {
            return (
              <td style={open ? { borderBottom: "none" } : {}} onClick={toggle} key={uuid.v4()}>
                {cell.isLink ? (
                  <Link to={{ pathname: cell.link }}>{cell.message} </Link>
                ) : (
                  cell.message
                )}
              </td>
            );
          })
        ]}
      </tr>
      {open ? (
        <tr>
          <td style={{ borderTop: "none" }} colSpan={3}>
            <>{cells[2].message}</>
          </td>
        </tr>
      ) : null}
    </>
  );
};
export default TableRow;

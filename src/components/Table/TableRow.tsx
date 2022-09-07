import { useState } from "react";
import { ITableCell } from "../spec";

interface ITableRow {
  cells: ITableCell[];
}

const TableRow = ({ cells }: ITableRow) => {
  const [open, setOpen] = useState<Boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <tr>
        {[
          ...cells.map((cell: ITableCell) => {
            return (
              <td style={open ? { borderBottom: "none" } : {}} onClick={toggle}>
                {cell.isLink ? <>{cell.message} </> : cell.message}
              </td>
            );
          })
        ]}
      </tr>
      {open ? (
        <tr>
          <td style={{ borderTop: "none" }} colSpan={3}>
            {cells[2].message}
          </td>
        </tr>
      ) : null}
    </>
  );
};
export default TableRow;

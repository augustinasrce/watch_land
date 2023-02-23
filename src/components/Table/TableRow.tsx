import * as uuid from "uuid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ITableCell } from "../../utils/spec";
import { ReactComponent as ArrowLogo } from "../../assets/arrow/arrow.svg";

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
          <td style={{ borderTop: "none" }} onClick={toggle} colSpan={3}>
            <ArrowLogo
              style={{
                height: "36px",
                width: "36px",
                transform: "rotate(-90deg)",
                margin: "3px"
              }}
            ></ArrowLogo>
            {cells[2].message}
          </td>
        </tr>
      ) : null}
    </>
  );
};
export default TableRow;

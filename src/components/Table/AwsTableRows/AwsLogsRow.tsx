import { useState } from "react";
import "./AwsLogsRow.scss";

/** Utils */
import { IAwsLogs } from "../../../services/aws/spec";
import { timestampToDate } from "../../../utils/dates";

import { ReactComponent as ArrowLogo } from "../../../assets/arrow/arrow.svg";

interface IAwsLogsRow {
  log?: IAwsLogs;
}

const AwsLogsRow = ({ log }: IAwsLogsRow) => {
  const [open, setOpen] = useState<Boolean>(false);

  const toggle = () => {
    setOpen(current => !current);
  };
  return (
    <>
      {log ? (
        <tr onClick={toggle}>
          <td>
            <ArrowLogo className={`logo ${open ? "open" : ""}`}></ArrowLogo>
            {log.logStreamName}
          </td>
          <td>{log.message}</td>
          <td> {timestampToDate(log.timestamp)}</td>
        </tr>
      ) : null}
      {open ? (
        <tr onClick={toggle}>
          <td colSpan={3}>
            <ArrowLogo className={`logo ${open ? "open" : ""}`}></ArrowLogo>
            {log?.logStreamName}
          </td>
        </tr>
      ) : null}
    </>
  );
};
export default AwsLogsRow;

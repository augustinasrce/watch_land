import { IAwsLogs } from "../../../services/aws/spec";
import { useState } from "react";
import { timestampToDate } from "../../../utils/dates";

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
          <td>{log.logStreamName}</td>
          <td>{log.message}</td>
          <td> {timestampToDate(log.timestamp)}</td>
        </tr>
      ) : null}
      {open ? (
        <tr onClick={toggle}>
          <td style={{ borderTop: "none" }} colSpan={3}>
            {log?.logStreamName}
          </td>
        </tr>
      ) : null}
    </>
  );
};
export default AwsLogsRow;

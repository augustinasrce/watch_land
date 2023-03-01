import { useState } from "react";

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
            <ArrowLogo
              style={
                open
                  ? {
                      height: "16px",
                      width: "16px",
                      transform: "rotate(-90deg)"
                    }
                  : { height: "16px", width: "16px" }
              }
            ></ArrowLogo>
            {log.logStreamName}
          </td>
          <td>{log.message}</td>
          <td> {timestampToDate(log.timestamp)}</td>
        </tr>
      ) : null}
      {open ? (
        <tr onClick={toggle}>
          <td style={{ borderTop: "none" }} colSpan={3}>
            <ArrowLogo
              style={{
                height: "24px",
                width: "24px",
                transform: "rotate(-90deg)",
                marginRight: "12px"
              }}
            ></ArrowLogo>
            {log?.logStreamName}
          </td>
        </tr>
      ) : null}
    </>
  );
};
export default AwsLogsRow;

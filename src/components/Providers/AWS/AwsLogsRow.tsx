import { IAwsLogs } from "../../../services/aws/spec";
import { timestampToDate } from "../../../utils/dates";

interface IAwsLogsRow {
  log?: IAwsLogs;
}

const AwsLogsRow = ({ log }: IAwsLogsRow) => {
  return (
    <>
      {log ? (
        <tr>
          <td>{log.logStreamName}</td>
          <td>{log.message}</td>
          <td> {timestampToDate(log.timestamp)}</td>
        </tr>
      ) : null}
    </>
  );
};
export default AwsLogsRow;

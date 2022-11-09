import { useState, useEffect } from "react";
import { ITableCell } from "../../spec";
import { tableCellObject } from "../../../utils/objects";
import { IAwsLogs } from "../../../services/aws/spec";
import { useQuery } from "../../../utils/hooks";
import Table from "../../Table/Table";
import BackButton from "../../BackButton/BackButton";
import { CloudWatch } from "../../../services/aws/aws";
import ErrorAlert from "../../Alert/ErrorAlert";

const AwsLogs = () => {
  const groupName = useQuery().get("group") || "";
  const [logs, setLogs] = useState<IAwsLogs[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const [error, setError] = useState<boolean>(false);
  const loadLogs = async () => {
    const logGroups = [{ group: groupName }];
    CloudWatch.logs(logGroups)
      .observe(data => {
        setLogs(data);
      })
      .catch(() => setError(true));
  };
  useEffect(() => {
    loadLogs();
  }, []);

  useEffect(() => {
    const bodyCells = () => {
      return [
        ...logs?.map((log: IAwsLogs) => {
          const logTimeStamp = tableCellObject(`${log.timestamp}`, false, "");
          const logMessage = tableCellObject(log.message, false, "");
          const streamName = tableCellObject(
            log.logStreamName,
            true,
            `/aws/logs?group=${groupName}&stream=${log.logStreamName}`
          );
          return [logMessage, streamName, logTimeStamp];
        })
      ];
    };
    setBody(bodyCells);
  }, [logs]);
  return (
    <>
      {error ? <ErrorAlert /> : null}
      <BackButton />
      <Table headers={["Log stream name", "Message", "Timestamp"]} body={body} />
    </>
  );
};

export default AwsLogs;

import { useState, useEffect } from "react";
import { ITableCell } from "../../spec";
import { tableCellObject } from "../../../utils/objects";
import { IAwsLogs } from "../../../services/aws/spec";
import { useQuery } from "../../../utils/hooks";
import Table from "../../Table/Table";
import BackButton from "../../BackButton/BackButton";
import { CloudWatch } from "../../../services/aws/aws";
import ErrorAlert from "../../Alert/ErrorAlert";
import Spinner from "../../Spinner/Spinner";
import SearcBar from "../../SearchBar/searchBar";
import { timestampToDate } from "../../timestampToDate";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const AwsLogs = () => {
  const groupName = useQuery().get("group") || "";
  const [logs, setLogs] = useState<IAwsLogs[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const [empty, setEmpty] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const limit = useSelector((state: RootState) => state.logs.limit);

  const loadLogs = async () => {
    const logGroups = [{ group: groupName }];
    setLoading(true);
    setLogs([]);
    CloudWatch.logs(logGroups, { limit: limit, start: 0, end: new Date().getTime() })
      .observe(data => {
        const l = logs.concat(data);
        setLogs(l);
        setLoading(false);
      })
      .done(() => {
        setLoading(false);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    if (logs.length === 0) setEmpty(true);
    else setEmpty(false);
  }, [loading, logs]);

  useEffect(() => {
    loadLogs();
  }, [limit]);

  useEffect(() => {
    const bodyCells = () => {
      return [
        ...logs?.map((log: IAwsLogs) => {
          const logTimeStamp = tableCellObject(`${timestampToDate(log.timestamp)}`, false, "");
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

  const search = (value: string) => {
    const filter = logs.filter(l => l.logStreamName.toLowerCase().includes(value.toLowerCase()));
    setLogs(filter);
  };

  return (
    <>
      {error ? <ErrorAlert /> : null}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <BackButton />
            <SearcBar search={search} isFinishDate />
          </div>
          {empty ? (
            <p>No results</p>
          ) : (
            <Table headers={["Log stream name", "Message", "Timestamp"]} body={body} openable />
          )}
        </>
      )}
    </>
  );
};

export default AwsLogs;

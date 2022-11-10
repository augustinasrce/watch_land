import { useEffect, useState } from "react";
import { IAwsStreams } from "../../../services/aws/spec";
import { useQuery } from "../../../utils/hooks";
import { tableCellObject } from "../../../utils/objects";
import { ITableCell } from "../../spec";
import Table from "../../Table/Table";
import BackButton from "../../BackButton/BackButton";
import { CloudWatch } from "../../../services/aws/aws";
import ErrorAlert from "../../Alert/ErrorAlert";
import { timestampToDate } from "../../timestampToDate";

const AwsStreams = () => {
  const groupName = useQuery().get("group") || "";
  const [streams, setStreams] = useState<IAwsStreams[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const [error, setError] = useState<boolean>(false);
  const loadStreams = async () => {
    const groups = [groupName];
    CloudWatch.streams(groups)
      .observe(data => {
        setStreams(data);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    loadStreams();
  }, []);

  useEffect(() => {
    const bodyCells = () => {
      return [
        ...streams?.map((stream: IAwsStreams) => {
          const streamName = tableCellObject(
            stream.logStreamName,
            true,
            `/aws/logs?group=${groupName}&stream=${stream.logStreamName}`
          );

          const firstEvent = tableCellObject(
            `${timestampToDate(stream.firstEventTimestamp)}`,
            false,
            ""
          );
          const lastEvent = tableCellObject(
            `${timestampToDate(stream.lastEventTimestamp)}`,
            false,
            ""
          );
          return [streamName, firstEvent, lastEvent];
        })
      ];
    };
    setBody(bodyCells);
  }, [streams]);
  return (
    <>
      {error ? <ErrorAlert /> : null}
      <BackButton />
      <Table headers={["Log stream", "First event time", "Last event time"]} body={body} />
    </>
  );
};

export default AwsStreams;

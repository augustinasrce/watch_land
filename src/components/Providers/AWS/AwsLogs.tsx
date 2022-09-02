import { useState, useEffect } from "react";
import { IProviderGroup } from "../../../utils/interfaces";

import { ITableCell } from "../../spec";
import { ProviderTypes } from "../../../utils/enum";
import { tableCellObject } from "../../../utils/objects";
import { slugifyString } from "../../../utils/strings";
import Table from "../../Table/Table";
import { getLogs } from "../../../services/services";
import { useParams } from "react-router-dom";
import { IAwsLogs } from "../../../services/aws/spec";
import { useQuery } from "../../../utils/hooks";

const AwsLogs = () => {
  const groupName = useQuery().get('group') || "";
  const stream = useQuery().get('stream') || "";
  const [logs, setLogs] = useState<IAwsLogs[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const loadLogs = async () => {
    const logs: any[] = await getLogs(groupName, [stream], ProviderTypes.AWS);
    setLogs(logs);
  };

  useEffect(() => {
    loadLogs();
  },[]);

  useEffect(() => {
    const bodyCells = () => {
      return [
        ...logs?.map((log: IAwsLogs) => {
          const logTimeStamp = tableCellObject(`${log.timestamp}`, false, "");
          const logMessage = tableCellObject(log.message, false, "");
          const streamName = tableCellObject(log.logStreamName, true, `/aws/logs?group=${groupName}&stream=${log.logStreamName}`);
          return [logTimeStamp, logMessage, streamName ];
        })
      ];
    };
    setBody(bodyCells);
  }, [logs]);
  /**
     *      logStreamName: string,
            timestamp: number
            message: string
            ingestionTime: number,
            eventId: string

            Display all inside the table component
     */
  return <Table headers={["Timestamp", "Message", "Log stream name"]} body={body} />;
};

export default AwsLogs;
import { useState, useEffect } from "react";
import { IProviderGroup } from "../../../utils/interfaces";
import { IAwsLogs } from "./spec";
import { ITableCell } from "../../spec";
import { getProviderGroups } from "../../../services/services";
import { ProviderTypes } from "../../../utils/enum";
import { tableCellObject } from "../../../utils/objects";
import { slugifyString } from "../../../utils/strings";
import Table from "../../Table/Table";

interface IAWSProps {
  groups: IProviderGroup[];
  details: boolean;
}

const AwsLogs = () => {
  const [logs, setLogs] = useState<IAwsLogs[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const loadLogs = async () => {
    const logs: any[] = await getProviderGroups(ProviderTypes.AWS);
    setLogs(logs);
  };

  useEffect(() => {
    loadLogs();
  });

  useEffect(() => {
    const bodyCells = () => {
      return [
        ...logs?.map((log: IAwsLogs) => {
          const logName = tableCellObject(
            log.logStreamName,
            true,
            slugifyString(log.logStreamName)
          );
          const logMessage = tableCellObject(log.message, false, "");
          const logTimeStamp = tableCellObject(log.timestamp.toString(), false, "");
          return [logName, logMessage, logTimeStamp];
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
  return <Table headers={["Log stream name", "Log message"]} body={body} />;
};

export default AwsLogs;

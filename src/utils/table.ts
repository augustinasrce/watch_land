import { timestampToDate } from "./timestampToDate";
import { IAwsLogGroups, IAwsLogs, IAwsStreams } from "../services/aws/spec";
import { tableCellObject } from "./objects";

type AwsAny = IAwsLogGroups | IAwsStreams | IAwsLogs;

export const generateTable = <T extends AwsAny>(
  dataArray: T[],
  groupName: string,
  baseUrl: string
) => {
  return [
    ...dataArray?.map(dataEntry => {
      const group = "logGroupName" in dataEntry ? dataEntry.logGroupName : groupName;
      const queryString = "logStreamName" in dataEntry ? `&stream=${dataEntry.logStreamName}` : "";
      const url = `${baseUrl}?group=${group}${queryString}`;
      const time = "timestamp" in dataEntry ? dataEntry.timestamp : dataEntry.creationTime;
      const name = "logStreamName" in dataEntry ? dataEntry.logStreamName : dataEntry.logGroupName;
      const entryTimeStamp = tableCellObject(`${timestampToDate(time)}`, false, "");
      const entryName = tableCellObject(name, true, url);

      if ("lastEventTimestamp" in dataEntry) {
        const lastEvent = `${timestampToDate(dataEntry.lastEventTimestamp)}`;
        const lastEventTimeStamp = tableCellObject(lastEvent, false, "");
        return [entryName, entryTimeStamp, lastEventTimeStamp];
      }
      if ("message" in dataEntry) {
        const entryMessage = tableCellObject(dataEntry.message, false, "");
        return [entryName, entryMessage, entryTimeStamp];
      }
      return [entryName, entryTimeStamp];
    })
  ];
};

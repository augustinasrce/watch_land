import { IAwsLogGroups, IAwsLogs, IAwsStreams } from "../../../services/aws/spec";
import { dates } from "../../../utils/";
import { tableCellObject } from "../../../utils/objects";

export const generateAwsGroupsTable = (dataArray: IAwsLogGroups[], baseUrl: string) => {
  return [
    ...dataArray.map(dataEntry => {
      const url = `${baseUrl}?group=${dataEntry.logGroupName}`;
      const entryTimeStamp = tableCellObject(`${dates.timestampToDate(dataEntry.creationTime)}`);
      const entryName = tableCellObject(dataEntry.logGroupName, url);

      return [entryName, entryTimeStamp];
    })
  ];
};

export const generateAwsStreamsTable = (
  dataArray: IAwsStreams[],
  group: string,
  baseUrl: string
) => {
  return [
    ...dataArray?.map(dataEntry => {
      const url = `${baseUrl}?group=${group}&stream=${dataEntry.logStreamName}`;
      const entryTimeStamp = tableCellObject(`${dates.timestampToDate(dataEntry.creationTime)}`);
      const entryName = tableCellObject(dataEntry.logStreamName, url);
      const lastEvent = `${dates.timestampToDate(dataEntry.lastEventTimestamp)}`;
      const lastEventTimeStamp = tableCellObject(lastEvent);
      return [entryName, entryTimeStamp, lastEventTimeStamp];
    })
  ];
};

export const generateAwsLogsTable = (dataArray: IAwsLogs[]) => {
  return [
    ...dataArray?.map(dataEntry => {
      const entryTimeStamp = tableCellObject(`${dates.timestampToDate(dataEntry.timestamp)}`);
      const entryName = tableCellObject(dataEntry.logStreamName);
      const entryMessage = tableCellObject(dataEntry.message);
      return [entryName, entryMessage, entryTimeStamp];
    })
  ];
};

export interface IAwsLogGroups {
  logGroupName: string;
  creationTime: number;
  metricFilterCount: number;
  arn: string;
}

export interface IAwsStreams {
  logStreamName: string;
  creationTime: number;
  firstEventTimestamp: number;
  lastEventTimestamp: number;
  lastIngestionTime: number;
  uploadSequenceToken: string;
  groupName: string;
  arn: string;
  storedBytes: number;
}

export interface IAwsLogs {
  logStreamName: string;
  timestamp: number;
  message: string;
  ingestionTime: number;
  eventId: string;
  tag: string;
}

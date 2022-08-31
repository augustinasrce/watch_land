export interface IAwsLogGroups {
  logGroupName: string;
  creationTime: string;
  metricFilterCount: number;
  arn: string;
}

export interface IAwsLogs {
  logStreamName: string;
  timestamp: number;
  message: string;
  ingestionTime: number;
  eventId: string;
}

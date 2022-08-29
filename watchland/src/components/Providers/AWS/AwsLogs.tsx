import { IProviderGroup } from "../../../utils/interfaces";

interface IAWSProps {
  groups: IProviderGroup[];
  details: boolean;
}

const AwsLogs = () => {
    /**
     *      logStreamName: string,
            timestamp: number
            message: string
            ingestionTime: number,
            eventId: string

            Display all inside the table component
     */
    return (
        <div>AWS Logs</div>
    );
};

export default AwsLogs;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAwsStreams } from "../../../services/aws/spec";
import { getStreams } from "../../../services/services";
import { ProviderTypes } from "../../../utils/enum";
import { useQuery } from "../../../utils/hooks";
import { tableCellObject } from "../../../utils/objects";
import { ITableCell } from "../../spec";
import Table from "../../Table/Table";

const AwsStreams = () => {
    const groupName = useQuery().get('group') || '';
    const [streams, setStreams] = useState<IAwsStreams[]>([]);
    const [body, setBody] = useState<ITableCell[][]>([])
    const loadStreams = async () => {
        const awsStreams: any[] = await getStreams(groupName,ProviderTypes.AWS);
        setStreams(awsStreams);
    };

    useEffect(() => {
        loadStreams();
    },[]);

    useEffect(()=>{
        const bodyCells = () => {
            return [
              ...streams?.map((stream: IAwsStreams) => {
                console.log('Group ', stream)
                const streamName = tableCellObject(
                    stream.logStreamName, true, `/aws/logs?group=${groupName}&stream=${stream.logStreamName}`
                );
                const firstEvent = tableCellObject(`${stream.firstEventTimestamp}`, false, "");
                const lastEvent = tableCellObject(`${stream.lastEventTimestamp}`, false, "");
                return [streamName, firstEvent, lastEvent];
              })
            ];
          };
          setBody(bodyCells);
    },[streams])
    return (
        <Table headers={ ['Log stream', 'First event time' ,'Last event time'] } body={ body }/>
    );
};

export default AwsStreams;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGroupById, getProviderGroups } from "../../../services/services";
import { ProviderTypes } from "../../../utils/enum";
import { ITableCell } from "../../spec";
import Table from "../../Table/Table";
import { IAwsLogGroups } from "./spec";

interface IAwsStreamProps {
  groupName:number
}

const AwsStreams = () => {
    const groupName = parseInt(useParams().streamName || "") || '';
    const [streams, setStreams] = useState<IAwsLogGroups[]>([]);
    const [body, setBody] = useState<ITableCell[][]>([])
    const loadStreams = async () => {
        const awsStreams: any[] = await getProviderGroups(ProviderTypes.AWS);
        setStreams(awsStreams);
    };

    useEffect(() => {
        loadStreams();
    });

    return (
        <Table headers={ ['Log stream', 'First event time' ,'Last event time'] } body={ body }/>
    );
};

export default AwsStreams;

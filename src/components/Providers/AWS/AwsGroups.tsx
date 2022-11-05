import { useEffect, useState } from "react";
import { IAwsLogGroups } from "../../../services/aws/spec";
import { tableCellObject } from "../../../utils/objects";
import { ITableCell } from "../../spec";
import Table from "../../Table/Table";
import BackButton from "../../BackButton/BackButton";
import { CloudWatch } from "../../../services/aws/aws";
import ErrorAlert from "../../Alert/ErrorAlert";

const AwsGroups = () => {
  const [groups, setGroups] = useState<IAwsLogGroups[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const [error, setError] = useState<boolean>(false);
  const loadGroups = async () => {
    CloudWatch.groups()
      .observe(data => {
        setGroups(data);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    loadGroups();
  }, []);

  useEffect(() => {
    const bodyCells = () => {
      return [
        ...groups?.map((group: IAwsLogGroups) => {
          const groupName = tableCellObject(
            group.logGroupName,
            true,
            `/aws/streams?group=${group.logGroupName}`
          );
          const creationTime = tableCellObject(group.creationTime, false, "");
          return [groupName, creationTime];
        })
      ];
    };
    setBody(bodyCells);
  }, [groups]);

  return (
    <>
      {error ? <ErrorAlert /> : null}
      <BackButton />
      <Table headers={["Log group", "Creation time"]} body={body} />
    </>
  );
};

export default AwsGroups;

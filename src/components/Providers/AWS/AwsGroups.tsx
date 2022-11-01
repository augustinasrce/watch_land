import { useEffect, useState } from "react";
import { IAwsLogGroups } from "../../../services/aws/spec";
import { tableCellObject } from "../../../utils/objects";
import { ITableCell } from "../../spec";
import Table from "../../Table/Table";
import BackButton from "../../BackButton/BackButton";
import { CloudWatch } from "../../../services/aws/aws";

const AwsGroups = () => {
  const [groups, setGroups] = useState<IAwsLogGroups[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const loadGroups = async () => {
    CloudWatch.groups().observe(data => {
      setGroups(data);
    });
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
      <BackButton />
      <Table headers={["Log group", "Creation time"]} body={body} />
    </>
  );
};

export default AwsGroups;

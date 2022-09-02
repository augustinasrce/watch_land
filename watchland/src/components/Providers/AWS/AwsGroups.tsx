import { useEffect, useState } from "react";
import { IAwsLogGroups } from "../../../services/aws/spec";
import { getGroups } from "../../../services/services";
import { ProviderTypes } from "../../../utils/enum";
import { tableCellObject } from "../../../utils/objects";
import { slugifyString } from "../../../utils/strings";
import { ITableCell } from "../../spec";
import Table from "../../Table/Table";

const AwsGroups = () => {
  const [groups, setGroups] = useState<IAwsLogGroups[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const loadGroups = async () => {
    const groups: any[] = await getGroups(ProviderTypes.AWS);
    setGroups(groups);
  };

  useEffect(() => {
    loadGroups();
  },[]);

  useEffect(() => {

    const bodyCells = () => {
      return [
        ...groups?.map((group: IAwsLogGroups) => {
          console.log('Group ', group)
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

  return <Table headers={["Log group", "Creation time"]} body={body} />;
};

export default AwsGroups;

import { useEffect, useState } from "react";
import { getProviderGroups } from "../../../services/services";
import { ProviderTypes } from "../../../utils/enum";
import { IProviderGroup } from "../../../utils/interfaces";
import { tableCellObject } from "../../../utils/objects";
import { slugifyString } from "../../../utils/strings";
import { ITableCell } from "../../spec";
import Table from "../../Table/Table";
import { IAwsLogGroups } from "./spec";

interface IAWSProps {
  groups: IProviderGroup[];
  details: boolean;
}

const AwsGroups = () => {
  const [groups, setGroups] = useState<IAwsLogGroups[]>([]);
  const [body, setBody] = useState<ITableCell[][]>([]);
  const loadGroups = async () => {
    const groups: any[] = await getProviderGroups(ProviderTypes.AWS);
    setGroups(groups);
  };
  useEffect(() => {
    loadGroups();
  });
  useEffect(() => {
    //  Example: const body = [
    //     [
    //       { message: "Text", isLink: true, link: "/aws/1/" },
    //       { message: "Text 2", isLink: false, link: "/aws/2/" }
    //     ],
    //     [
    //       { message: "Text 3", isLink: true, link: "/aws/3/" },
    //       { message: "Text 4", isLink: false, link: "/aws/4/" }
    //     ]
    //   ];
    const bodyCells = () => {
      return [
        ...groups?.map((group: IAwsLogGroups) => {
          const groupName = tableCellObject(
            group.logGroupName,
            true,
            slugifyString(group.logGroupName)
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

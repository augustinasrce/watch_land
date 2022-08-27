import { FC, useEffect, useState } from "react";
import { getProviderGroups } from "../../services/services";
import { ProviderTypes } from "../../utils/enum";
import { IProviderGroup } from "../../utils/interfaces";
import TableItem from "../Table/Table";

interface IProviderPros {
  type: ProviderTypes;
}

const Provider: FC<IProviderPros> = ({ type }) => {
  const [groups, setGroups] = useState<IProviderGroup[]>();

  useEffect(() => {
    loadGroups();
  }, [type]);

  const loadGroups = async () => {
    const groups: IProviderGroup[] = await getProviderGroups(type);
    setGroups(groups);
  };

  if (groups) {
    return (
      <div>
        <TableItem groups={groups} type={type} details={false} />
      </div>
    );
  } else {
    return <div>Undifined</div>;
  }
};

export default Provider;

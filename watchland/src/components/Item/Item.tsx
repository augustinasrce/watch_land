import { useParams } from "react-router-dom";
import { getGroupById } from "../../services/services";
import { ProviderTypes } from "../../utils/enum";
import { useEffect, useState } from "react";
import { IProviderGroup } from "../../utils/interfaces";

interface ItemProps {
  type: ProviderTypes;
}

const Item = ({ type }: ItemProps) => {
  const groupId = parseInt(useParams().groupId || "") || 1;
  const [group, setGroup] = useState<IProviderGroup | undefined>(undefined);

  useEffect(() => {
    loadGroup();
  }, []);

  const loadGroup = async () => {
    setGroup(await getGroupById(groupId, type));
  };

  return (
    <div>
      <h1>{JSON.stringify(group)}</h1>
    </div>
  );
};

export default Item;

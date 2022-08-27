import { useParams } from "react-router-dom";
import { getGroupById } from "../../services/services";
import { ProviderTypes } from "../../utils/enum";
import { useEffect, useState } from "react";
import { IProviderGroup } from "../../utils/interfaces";

interface ItemProps {
  type: ProviderTypes;
}

const LogMessage = ({ type }: ItemProps) => {
  const groupId = parseInt(useParams().groupId || "") || 1;
  const [group, setGroup] = useState<IProviderGroup | undefined>(undefined);

  useEffect(() => {
    loadGroup();
  }, []);

  const loadGroup = async () => {
    setGroup(await getGroupById(groupId, type));
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr className="table-id">
          <th>TimeStamp</th>
        </tr>
        <tr className="table-lastEvent">
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{JSON.stringify(group)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default LogMessage;

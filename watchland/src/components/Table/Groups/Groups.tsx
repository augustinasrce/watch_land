import React, { useState } from "react";
import { IProviderGroup } from "../../../utils/interfaces";
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

interface GroupProps {
  group: IProviderGroup;
}

const Group = ({ group }: GroupProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const getDetails = () => {
    if (!expanded) return null;
    return (
      <tr className="info">
        <td>{group.lastEvent}</td>
      </tr>
    );
  };

  return (
    <React.Fragment>
      <tr className={`group ${expanded ? "expanded" : ""}`} key={group.id}>
        {!expanded ? (
          <td className="group-id">
            <GoTriangleRight className="arrow-right" onClick={() => setExpanded(!expanded)} />
            {group.id}
          </td>
        ) : (
          <td className="group-id">
            <GoTriangleDown className="arrow-down" onClick={() => setExpanded(!expanded)} />
            {group.id}
          </td>
        )}
        <td className="group-stream"> {group.stream}</td>
      </tr>
      {getDetails()}
    </React.Fragment>
  );
};

export default Group;

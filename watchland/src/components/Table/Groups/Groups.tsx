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
        <td>{group.stream}</td>
      </tr>
    );
  };

  return (
    <React.Fragment>
      <tr className={`group ${expanded ? "expanded" : ""}`} key={group.id}>
        <td className="group-id">{group.id}</td>
        <td className="group-stream"> {group.stream}</td>
        {!expanded ? (
          <td className="group-lastEvent">
            <GoTriangleRight className="arrow-right" onClick={() => setExpanded(!expanded)} />
            {group.lastEvent}
          </td>
        ) : (
          <td className="group-lastEvent">
            <GoTriangleDown className="arrow-down" onClick={() => setExpanded(!expanded)} />
            {group.lastEvent}
          </td>
        )}
      </tr>
      {getDetails()}
    </React.Fragment>
  );
};

export default Group;

import React, { useState } from "react";
import { IProviderGroup } from "../../../utils/interfaces";
import Group from "../Groups/Groups";
import "./TableItem.scss";

interface ITableItemProps {
  groups: IProviderGroup[];
}

const TableItem = ({ groups }: ITableItemProps) => {
  return (
    <div className="table">
      <table>
        <thead>
          <th className="table-id">
            <td>ID</td>
          </th>
          <th className="table-stream">
            <td>Stream</td>
          </th>
          <th className="table-lastEvent">
            <td>Last event</td>
          </th>
        </thead>
        <tbody>
          {[
            ...groups.map((group: IProviderGroup) => {
              return <Group group={group} />;
            })
          ]}
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;

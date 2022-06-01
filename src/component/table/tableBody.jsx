import React from "react";
import { Link } from "react-router-dom";
import TableItem from "./tableItem";

const TableBody = ({ dummyDataId, dummyDataName, dummyDataAuthor }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Api</th>
          <th>Title</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <Link to="/aws/tableBody/tableItem">{dummyDataId}</Link>
          </th>
          <th>{dummyDataName}</th>
          <th>{dummyDataAuthor}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default TableBody;

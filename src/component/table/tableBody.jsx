import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ address }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Ip</th>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {address.map(a => (
          <tr key={a.id}>
            <td>
              <Link to={`/aws/tableBody/${a.id}`}>{a.id}</Link>
            </td>
            <td>{a.ip}</td>
            <td>{a.name}</td>
            <td>{a.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableBody;

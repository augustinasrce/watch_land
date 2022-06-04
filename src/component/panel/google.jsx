import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../table/table.css";

const Google = () => {
  const [address, setAddress] = useState([]);

  const filtered = address.filter(a => a.type.includes("google"));

  useEffect(() => {
    axios
      .get("http://localhost:3004/address")
      .then(response => {
        setAddress(response.data);
      })
      .catch(error => alert("broken"));
  }, []);

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
        {filtered.map(a => (
          <tr key={a.id}>
            <td>
              <Link to={`/google/${a.id}`}>{a.id}</Link>
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

export default Google;

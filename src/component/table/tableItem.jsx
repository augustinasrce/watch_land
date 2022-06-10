import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "../table/table.css";

const TableItem = () => {
  const ip = useParams().ip;
  const [address, setAddress] = useState();

  useEffect(() => {
    if (ip) {
      axios
        .get(`http://localhost:3004/address?ip=${ip}`)
        .then(response => {
          setAddress(response.data[0]);
        })
        .catch(error => alert("broken"));
    }
  }, [ip]);

  return (
    <div className="small-table">
      <table className="table-ip">
        <thead>
          <tr>
            <th>Ip</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody className="tablebody-ip">
          <tr>
            <td>{address ? `${address.ip}` : ""}</td>
            <td>{address ? `${address.location}` : ""}</td>
          </tr>
        </tbody>
      </table>
      <Link className="back-button" to="/">
        Back
      </Link>
    </div>
  );
};

export default TableItem;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const TableItem = () => {
  const ip = useParams().ip;
  const [address, setAddress] = useState();

  useEffect(() => {
    if (ip) {
      axios
        .get(`http://localhost:3004/address?ip=${ip}`)
        .then(response => {
          setAddress(response.data[0]);
          console.log(response);
        })
        .catch(error => alert("broken"));
    }
  }, [ip]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ip</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{address ? `${address.ip} ${address.location}` : ""}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Back</Link>
    </div>
  );
};

export default TableItem;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const TableItem = () => {
  const addressId = useParams().addressId;
  const [address, setAddress] = useState();

  useEffect(() => {
    if (addressId) {
      axios
        .get(`http://localhost:3004/address/${addressId}`)
        .then(response => {
          setAddress(response.data);
          console.log(response);
        })
        .catch(error => alert("broken"));
    }
  }, [addressId]);

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

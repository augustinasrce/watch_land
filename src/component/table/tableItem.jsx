import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
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
      <ol>
        <li>{address ? `${address.id} ${address.ip} ${address.name} ${address.type} ` : ""}</li>
      </ol>
      <Link to="/aws">Back</Link>
    </div>
  );
};

export default TableItem;

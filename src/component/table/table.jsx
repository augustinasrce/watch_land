import React, { useEffect, useState } from "react";
import TableBody from "./tableBody";
import axios from "axios";
import "./table.css";

const Table = () => {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/address")
      .then(response => {
        setAddress(response.data);
      })
      .catch(error => alert("broken"));
  }, []);

  return (
    <div className="table-container">
      <TableBody address={address} />
    </div>
  );
};

export default Table;

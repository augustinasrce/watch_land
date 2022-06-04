import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../table/table.css";

const Provider = ({ type }) => {
  const [address, setAddress] = useState([]);

  const [pageSize, setPageSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/address?type=${type}&_limit=${pageSize}&_page=${currentPage}`)
      .then(response => {
        setAddress(response.data);
      })
      .catch(error => alert("broken"));
  }, [type, currentPage, pageSize]);

  return (
    <>
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
              <td>{a.id}</td>
              <td>
                <Link to={`/provider/${a.ip}`}>{a.ip}</Link>
              </td>
              <td>{a.name}</td>
              <td>{a.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input type="number" onChange={e => setCurrentPage(e.target.value)} />
    </>
  );
};
export default Provider;

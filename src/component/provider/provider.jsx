import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../table/table.css";

const Provider = ({ type }) => {
  const [address, setAddress] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;

  useEffect(() => {
    let url = `http://localhost:3004/address?_limit=${pageSize}&_page=${currentPage}`;
    if (type) {
      url = `${url}&type=${type}`;
    }
    axios
      .get(url)
      .then(response => {
        setAddress(response.data);
      })
      .catch(error => alert("broken"));
  }, [type, currentPage]);

  return (
    <React.Fragment>
      <table className="table ip">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ip</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody className="tablebody">
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
      <nav className="pagination">
        <ul>
          <li onClick={() => setCurrentPage(currentPage - 1)}>Previous</li>
          <li onClick={() => setCurrentPage(currentPage + 1)}>Next</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default Provider;

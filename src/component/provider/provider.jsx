import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../provider/provider.css";

const Provider = ({ type }) => {
  const [address, setAddress] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;

  useEffect(() => {
    let url = `http://localhost:3004/address?_limit=${pageSize}&_page=${currentPage}`;
    if (type) {
      url = `${url}&type=${type}`;
    }
    fetch(url)
      .then(response => {
        setAddress(response.data);
      })
      .catch(error => alert("broken"));
  }, [type, currentPage]);

  return (
    <React.Fragment>
      <section>
        <div>
          <div></div>
          <div>Timestamp</div>
        </div>
      </section>
      {/* <table className="table ip">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Ip</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody className="tablebody">
          {address.map(a => (
            <tr key={a.id}>
              <td>
                <img src={`${process.env.PUBLIC_URL}${a.image}`} alt="icon"></img>
              </td>
              <td>
                <Link to={`/provider/${a.ip}`}>{a.ip}</Link>
              </td>
              <td>{a.name}</td>
              <td>{a.type}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
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

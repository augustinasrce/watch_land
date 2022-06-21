import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./provider.css";
import * as ProviderService from "../../services/providerService.js";

const Provider = ({ type }) => {
  const [groups, setGroup] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    ProviderService.fetchGroups(currentPage, pageSize, type)
      .then(response => setGroup(response))
      .catch(error => console.log(error));
  }, [type, currentPage]);

  return (
    <React.Fragment>
      <section>
        <div className="title">
          <h3>Log stream</h3>
          <h3>Last event time</h3>
        </div>
        {groups.map(g => (
          <div className="timestamp">
            <div className="timestamp-div" key={g.stream}>
              <Link to={`/provider/${encodeURIComponent(g.stream)}`}>{g.stream}</Link>
            </div>
            <div className="timestamp-div" key={g.lastEvent}>
              {g.lastEvent}
            </div>
          </div>
        ))}
      </section>
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

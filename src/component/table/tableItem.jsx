import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ProviderService from "../../services/providerService.js";
import "../table/table.css";

const TableItem = () => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    ProviderService.fetchStreams()
      .then(response => setStreams(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="small-table">
      <section>
        <div>
          {streams.map(s => (
            <div>
              <div key={s.time}>{s.time}</div>
              <div key={s.message}>{s.message}</div>
            </div>
          ))}
        </div>
      </section>
      <Link className="back-button" to="/">
        Back
      </Link>
    </div>
  );
};

export default TableItem;
